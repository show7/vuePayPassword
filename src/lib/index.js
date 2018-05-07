import vuePayPassword from './vue-pay-password'


const PayPassword = {
	install(Vue,options){
		Vue.component(vuePayPassword.name,vuePayPassword)
		if (typeof window !== 'undefined' && window.Vue) { 
			window.Vue.use(PayPassword) 
		}

	}
}

export default PayPassword