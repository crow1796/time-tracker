import { router } from './../router';

export default {
	loginUser(context, params){
		context.commit('userAuthStatus', true);
		if(router.currentRoute.query.redirect){
			router.push(router.currentRoute.query.redirect);	
			return true;
		}
		router.push('/');
	},
	logoutUser(context, params){
		context.commit('userAuthStatus', false);
		router.push('/login');
	}
}