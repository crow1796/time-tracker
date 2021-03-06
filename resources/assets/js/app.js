
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.Timer = require('easytimer');
import NProgress from 'nprogress';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import { store } from './store/store';
import { router } from './router';
import vueinterval from 'vue-interval';
import filters from './filters';

Vue.use(VueRouter);
Vue.use(Buefy);

import App from './views/App.vue';
require('./components');

axios.interceptors.response.use((config) => {
	NProgress.start();
	const authToken = store.getters.userToken;
	config.headers.Authorization = `Bearer ${authToken}`;

	next((response) => {
		NProgress.done();
	});
});

// Vue.http.interceptors.push((request, next) => {
// 	NProgress.start();
// 	const authToken = auth.getToken();
//     request.headers.set('Authorization', `Bearer ${authToken}`);

//     next((response) => {
//     	NProgress.done();
//     	if (response.status == 404) {
//     	  router.go('/');
//     	} else if (response.status == 401 && response.data.refreshed_token) {
//     	  auth.setToken(response.data.refreshed_token);
//     	} else if (response.data.token_expired){
//     		router.replace('/logout');
//     	}
//     });
// });

const app = new Vue({
    el: '#app',
	router,
	store,
	render: h => h(App)
});
