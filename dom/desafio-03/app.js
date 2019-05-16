new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        /* utiliar propriedade computada(função), garante que só será chamada a func pelo contexto correto.
        botão aumentar 2 não impacta no calculo do resultado, mas se olhar log, renderiza a chamada 
        da func 
        */
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
});