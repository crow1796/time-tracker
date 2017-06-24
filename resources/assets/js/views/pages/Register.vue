<script>
	export default {
		data(){
			return {
				email: null,
				password: null
			};
		},
		methods: {
		}
	}
</script>

<template>
	<div id="login">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-sm-offset-3">
					<div class="panel panel-default" id="register">
						<form @submit.prevent="">
							<div class="panel-heading">
								<h4>Register</h4>
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
							</div>
							<div class="panel-footer text-right">
								<router-link to="/login" class="pull-left">Already have an account?</router-link>
								<button type="submit" class="btn btn-md btn-primary">
									Create an Account
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
	#register{
		margin-top: 80px;
	}
</style>