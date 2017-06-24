import VueRouter from 'vue-router';
import Home from './views/pages/Home.vue';
import Login from './views/pages/Login.vue';
import Register from './views/pages/Register.vue';
import ForgotPassword from './views/pages/ForgotPassword.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/forgot-password', component: ForgotPassword }
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});