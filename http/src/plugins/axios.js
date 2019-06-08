import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-9db5c.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios

        // Pode-se criar instancias do axios conforme o exemplo abaixo
        // Vue.prototype.$http = axios.create({
        //     baseURL = 'https://curso-vue-9db5c.firebaseio.com/'
        // })
    }
})