import Vue from 'vue'
import axios from 'axios'

//Forma global de acesso.
//axios.defaults.baseURL = 'https://curso-vue-9db5c.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {

        //Forma global de acesso.
        //Vue.prototype.$http = axios

        // Por instancia.
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-9db5c.firebaseio.com/',

            //Header pode ser criado aqui também.
            // headers: {
            //     "Authorization": "abc123"
            // }
        })


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
    }
})