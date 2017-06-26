<?php 
namespace App\GatePass\Auth;
use JWTAuth;
use Validator;
use App\User;
use Auth;
use Hash;

class JWTAuthenticator {

	/**
	 * API Login with JWT.
	 * @param  array
	 * @return array
	 */
	public function login($credentials){
		$validation = $this->validateCredentials($credentials);
		if($validation->fails()){
			return response()->json(['error' => $validation->errors()->all()], 401);
		}
		if(!$credentials) return response()->json(['error' => 'Invalid Username or Password.', 401]);
		$token = false;

		try {
			$token = JWTAuth::attempt($credentials);
		    if (!$token) return response()->json(['error' => 'Invalid Username or Password.'], 401);
		} catch (JWTException $e) {
		    return response()->json(['error' => 'Could not create token.'], 500);
		}
		$user = Auth::user();
		$userdata = [
			'id' => $user->id,
			'first_name' => $user->first_name,
			'last_name' => $user->last_name,
			'email' => $user->email,
		];

		return response()->json(compact('token', 'userdata'));
	}

	protected function validateCredentials($credentials){
		$rules = [
			'username' => 'required',
			'password' => 'required',
		];

		return Validator::make($credentials, $rules);
	}

	/**
	 * Authenticate User by its token.
	 * @param $token string
	 */
	public function getUser(){
		$tokenExpired = false;
		try {
			$user = JWTAuth::parseToken()->authenticate();
		}catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
			$tokenExpired = true;
		} catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

		} catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

		}
		if($tokenExpired){
			return response()->json(['error' => 'Invalid User.', 'token_expired' => true]);
		}
		if(!$user){
			return response()->json(['error' => 'Invalid User.'], 401);
		}

		return response()->json([
			'id' => $user->id,
			'username' => $user->username,
			'first_name' => $user->first_name,
			'last_name' => $user->last_name,
			'email' => $user->email,
			]);
	}

	public function changePassword($request){
		$validation = $this->validateChangePassword($request->all());
		if($validation->fails()){
			return response()->json(['error' => $validation->errors()->all()], 401);
		}
		$loggedUser = JWTAuth::parseToken()->authenticate();
		$user = User::findOrFail($request->user_id);
		if(!Auth::attempt(array(
			'username' => $request->username,
			'password' => $request->current_password,
			), false, false)){
			return response()->json(['error' => 'Incorrect current password.'], 401);
		}
		if($user != $loggedUser){
			return response()->json(['error' => 'Invalid User.'], 401);
		}

		$this->updatePasswordFor($user, $request->new_password);

		return response()->json(['message' => 'Your password has been changed successfully.'], 200);
	}

	private function updatePasswordFor($user, $newPassword){
		$user->password = bcrypt($newPassword);
		$user->save();
		return $user;
	}

	public function validateChangePassword($fields){
		$rules = [
			'current_password' => 'required',
			'new_password' => 'required|confirmed',
			'new_password_confirmation' => 'required',
		];
		return Validator::make($fields, $rules);
	}
}