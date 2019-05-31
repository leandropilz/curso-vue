import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'lightgreen'
		
		//Valida se o argumento fundo existe e aplica a cor ao fundo.
		if (binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value	
		} else {
			el.style.color = binding.value	
		}
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
