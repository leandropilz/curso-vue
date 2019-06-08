import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-9db5c.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios

        //Utilizado para interceptar as requisições.
        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method)
            return config
        }, error => Promise.reject(error))

        //Utilizado para interceptar as respostas.
        Vue.prototype.$http.interceptors.response.use(res => {
            // Exemplo de como interceptar uma resposta e manipular os dados.
            
            // const array = []
            // for (let chave in res.data) {
            //     array.push({
            //         id: chave,
            //         ...res.data[chave]

            //     })
            // }
            // res.data = array
            return res

        }, error => Promise.reject(error))

        // Pode-se criar instancias do axios conforme o exemplo abaixo
        // Vue.prototype.$http = axios.create({
        //     baseURL = 'https://curso-vue-9db5c.firebaseio.com/'
        // })
    }
})