<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span>
        Total:
        <strong>{{ total | dinheiro }}</strong>
      </span>
      <hr>
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //Exemplo usando mapGetters
  computed: mapGetters("carrinho", {
    total: "valorTotal"
  })

  //Exemplo inicial sem usar mapGetters
  // computed: {
  //   total() {
  //     return this.$store.getters.valorTotal;
  //   }
  // }
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
