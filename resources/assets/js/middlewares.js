import { store } from './store/store';

export default {
	redirectIfNotAuth(to, from, next) {
		if(!store.getters.isLoggedIn){
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			});
			return true;
		}
		next();
	},
	redirectIfAuthenticated(to, from, next){
		if(store.getters.isLoggedIn) {
			next({
				path: '/'
			});
			return true;
		}
		next();
	}
}