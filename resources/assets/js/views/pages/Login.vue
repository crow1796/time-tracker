<script>
	export default {
		data(){
			return {
				email: null,
				password: null
			};
		},
		methods: {
			loginUser(){
				this.$store.dispatch('loginUser', { email: this.email, password: this.password });
			}
		}
	}
</script>

<template>
	<div id="login">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-sm-offset-3">
					<div class="panel panel-default" id="login-form">
						<form @submit.prevent="loginUser">
							<div class="panel-heading">
								<h4>Login</h4>
							</div>
							<div class="panel-body">
								<div class="form-group">
									<label for="email" class="control-label">E-mail Address:</label>
									<input type="email" id="email" name="email" class="form-control" placeholder="Enter your E-mail Address" v-model="email">
								</div>
								<div class="form-group">
									<label for="password" class="control-label">Password:</label>
									<input type="password" id="password" name="password" class="form-control" placeholder="Enter your Password" v-model="password">
								</div>
								<div class="form-group">
									<label for="remember">
										<input type="checkbox" name="remember" id="remember"> Remember Me?
									</label>
								</div>
								<div class="form-group text-right">
									<router-link to="/forgot-password">Forgot Password?</router-link>
								</div>
							</div>
							<div class="panel-footer text-right">
								<router-link to="/register" class="pull-left">Don't have an account?</router-link>
								<button type="submit" class="btn btn-md btn-primary">
									Login
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
	#login-form{
		margin-top: 80px;
	}
</style>