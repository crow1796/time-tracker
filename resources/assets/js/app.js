
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import { store } from './store/store';
import { router } from './router';
Vue.use(VueRouter);

import App from './views/App.vue';

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

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach((to, from) => {
	sessionStorage.setItem('previousLink', from.fullPath);
	NProgress.done();
});

const app = new Vue({
    el: '#app',
	router,
	store,
	render: h => h(App)
});
