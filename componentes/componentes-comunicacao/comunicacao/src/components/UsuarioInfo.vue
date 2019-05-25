<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário:
      <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      Idade do usuário:
      <strong>{{ idade }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar nome</button>
    <!-- reiniciarNome envia um evento via $emit -->
    <button @click="reiniciarFn()">Reiniciar nome (Callback)</button>
    <!-- reiniciarFn() função callback recebida pelo pai -->
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
      default: "Anônimo"
    },
    reiniciarFn: Function,
    idade: Number
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      this.nome = "Pedro";
      //Função interna da instância do vue
      this.$emit("nomeMudou", this.nome);
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
