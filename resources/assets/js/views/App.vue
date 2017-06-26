<script>
	export default {
		created(){

		},
		data(){
			return {};
		},
		computed: {
			isLoggedIn(){
				return this.$store.getters.isLoggedIn;
			}
		},
		methods: {
			logoutUser(){
				this.$store.dispatch('logoutUser');
			}
		}
	}
</script>

<template>
	<div id="app">
		<div id="not-logged-in" v-if="!isLoggedIn">
			<div class="container">
				<div class="columns">
					<div class="column is-half is-offset-one-quarter">
						<transition name="fade" mode="out-in">
							<router-view class="view" 
									keep-alive
									transition
									transition-mode="in-out">
							</router-view>
						</transition>
					</div>
				</div>
			</div>
		</div>
		<div id="logged-in" v-if="isLoggedIn">
			<nav class="nav is-primary has-shadow">
				<div class="container">
					<div class="nav-left">
						<!-- <a class="nav-item">
							<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
						</a> -->
						<router-link to="/" class="nav-item is-tab is-hidden-mobile" exact-active-class="is-active">Dashboard</router-link>
						<router-link to="/iterations" class="nav-item is-tab is-hidden-mobile" exact-active-class="is-active">Iterations</router-link>
						<router-link to="/projects" class="nav-item is-tab is-hidden-mobile" exact-active-class="is-active">Projects</router-link>
						<router-link to="/reports" class="nav-item is-tab is-hidden-mobile" exact-active-class="is-active">Reports</router-link>
						<router-link to="/team" class="nav-item is-tab is-hidden-mobile" exact-active-class="is-active">Team</router-link>
					</div>
					<span class="nav-toggle">
						<span></span>
						<span></span>
						<span></span>
					</span>
					<div class="nav-right nav-menu" style="overflow: visible;">
						<router-link to="/iterations" class="nav-item is-tab is-hidden-tablet" exact-active-class="is-active">Dashboard</router-link>
						<router-link to="/iterations" class="nav-item is-tab is-hidden-tablet" exact-active-class="is-active">Iterations</router-link>
						<router-link to="/projects" class="nav-item is-tab is-hidden-tablet" exact-active-class="is-active">Projects</router-link>
						<router-link to="/reports" class="nav-item is-tab is-hidden-tablet" exact-active-class="is-active">Reports</router-link>
						<router-link to="/team" class="nav-item is-tab is-hidden-tablet" exact-active-class="is-active">Team</router-link>
						<b-dropdown position="is-bottom-left">
						    <a class="nav-item" slot="trigger">
						    	<figure class="image is-16x16" style="margin-right: 8px;">
						    		<img src="http://bulma.io/images/jgthms.png">
						    	</figure>
						        <span>My Account</span>
						        <b-icon icon="arrow_drop_down"></b-icon>
						    </a>

						    <b-dropdown-option subheader>
						        Logged as <b>Joshua Tundag</b>
						    </b-dropdown-option>
						    <b-dropdown-option separator />
						    <b-dropdown-option value="settings">
						        <b-icon icon="settings"></b-icon>
						        Settings
						    </b-dropdown-option>
						    <b-dropdown-option @click="logoutUser">
						        <b-icon icon="exit_to_app"></b-icon>
						        Logout
						    </b-dropdown-option>
						</b-dropdown>
					</div>
				</div>
			</nav>
			<section class="section">
				<div class="container">
					<transition name="fade" mode="out-in">
						<router-view class="view" 
								keep-alive
								transition
								transition-mode="in-out">
						</router-view>
					</transition>
				</div>
			</section>
		</div>
	</div>
</template>