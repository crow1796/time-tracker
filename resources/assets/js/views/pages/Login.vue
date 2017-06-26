<script>
	export default {
		data(){
			return {
				email: null,
				password: null,
				remember: false
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
		<form class="box" id="login-form" @submit.prevent="loginUser">
			<h3 class="title is-3">Login</h3>
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
			<div class="block level">
			    <div class="level-left">
			    	<div class="level-item">
			    		<b-checkbox v-model="remember">Remember Me?</b-checkbox>
			    	</div>
			    </div>
				<div class="level-right">
					<div class="level-item">
						<router-link to="/forgot-password">Forgot Password?</router-link>
					</div>
				</div>
			</div>
			<div class="level">
				<div class="level-left">
					<div class="level-item">
						<router-link to="/register">Create an account</router-link>
					</div>
				</div>
				<div class="level-right">
					<div class="level-item">
						<button type="submit" class="button is-primary">
							Login
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
	#login-form{
		margin-top: 80px;
	}
</style>