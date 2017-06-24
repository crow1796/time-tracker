<script>
	export default {
		data(){
			return {
				email: null
			};
		}
	}
</script>

<template>
	<div id="forgot-password-form">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-sm-offset-3">
					<div class="panel panel-default" id="login-form">
						<form @submit.prevent="loginUser">
							<div class="panel-heading">
								<h4>Forgot Password</h4>
							</div>
							<div class="panel-body">
								<div class="form-group">
									<label for="email" class="control-label">E-mail Address:</label>
									<input type="email" id="email" name="email" class="form-control" placeholder="Enter your E-mail Address" v-model="email">
								</div>
							</div>
							<div class="panel-footer text-right">
								<router-link to="/login" class="pull-left">Already have an account?</router-link>
								<button type="submit" class="btn btn-md btn-primary">
									Reset Password
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	#forgot-password-form{
		margin-top: 80px;
	}
</style>