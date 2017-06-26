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
	<div id="forgot-password">
		<form class="box" id="forgot-password-form" @submit.prevent="loginUser">
			<h3 class="title is-3">Forgot Password</h3>
			<div class="block">
				<b-field label="E-mail Address:">
				    <b-input placeholder="Enter your E-mail Address" v-model="email"></b-input>
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
							Reset
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
	#forgot-password-form{
		margin-top: 80px;
	}
</style>