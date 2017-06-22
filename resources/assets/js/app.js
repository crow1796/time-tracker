
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router');
window.NProgress = require('nprogress');
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const App = require('./views/App.vue');

const routes = [];

Vue.http.interceptors.push((request, next) => {
	NProgress.start();
	const authToken = auth.getToken();
    request.headers.set('Authorization', `Bearer ${authToken}`);

    next((response) => {
    	NProgress.done();
    	if (response.status == 404) {
    	  router.go('/');
    	} else if (response.status == 401 && response.data.refreshed_token) {
    	  auth.setToken(response.data.refreshed_token);
    	} else if (response.data.token_expired){
    		router.replace('/logout');
    	}
    });
});
const router = new VueRouter({
	routes,
	mode: 'history'
});

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
	render: h => h(App)
});
