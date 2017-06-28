import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from './views/pages/Home.vue';
import Login from './views/pages/Login.vue';
import Register from './views/pages/Register.vue';
import ForgotPassword from './views/pages/ForgotPassword.vue';
import Tasks from './views/app_pages/Tasks.vue';
import Projects from './views/app_pages/Projects.vue';
import Team from './views/app_pages/Team.vue';
import Page404 from './views/pages/404.vue';
import Middlewares from './middlewares';

const routes = [
	{ path: '/', component: Home, beforeEnter: Middlewares.redirectIfNotAuth },
	{ path: '/login', component: Login, beforeEnter: Middlewares.redirectIfAuthenticated },
	{ path: '/register', component: Register, beforeEnter: Middlewares.redirectIfAuthenticated },
	{ path: '/forgot-password', component: ForgotPassword, beforeEnter: Middlewares.redirectIfAuthenticated },
	{
		path: '/tasks', 
		component: Tasks, 
		beforeEnter: Middlewares.redirectIfNotAuth,
		children: [
			{ path: '/tasks/:task', component: Tasks }
		]
	},
	{ path: '/projects', component: Projects, beforeEnter: Middlewares.redirectIfNotAuth },
	{ path: '/team', component: Team, beforeEnter: Middlewares.redirectIfNotAuth },
	{ path: '/404', component: Page404 },
	{ path: '*', redirect: '/404' }
];

export let router = new VueRouter({
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