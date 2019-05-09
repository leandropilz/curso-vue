new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        mostrarAlerta() {
            alert('Click no botao!!')
        },
        armazenaValor(event) {
            this.valor = event.target.value
        }
    }
})