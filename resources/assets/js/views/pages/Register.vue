<script>
	export default {
		data(){
			return {
				email: null,
				password: null,
				password_confirmation: null
			};
		},
		methods: {
		}
	}
</script>

<template>
	<div id="register">
		<form class="box" id="register-form" @submit.prevent="loginUser">
			<h3 class="title is-3">Create an Account</h3>
			<b-field label="E-mail Address:">
			    <b-input placeholder="Enter your E-mail Address" v-model="email"></b-input>
			</b-field>
			<b-field label="Password">
			    <b-input type="password"
			        placeholder="Enter your Password" 
			        v-model="password"
			        password-reveal>
			    </b-input>
			</b-field>
			<div class="block">
				<b-field label="Re-enter Password">
				    <b-input type="password"
				        placeholder="Re-enter your Password" 
				        v-model="password_confirmation"
				        password-reveal>
				    </b-input>
				</b-field>
			</div>
			<div class="level">
				<div class="level-left">
					<div class="level-item">
						<router-link to="/login">Already have an account?</router-link>	
					</div>
				</div>
				<div class="level-right">
					<div class="level-item">
						<button type="submit" class="button is-primary">
							Register
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
	#register-form{
		margin-top: 80px;
	}
</style>