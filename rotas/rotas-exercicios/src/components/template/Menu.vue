<template>
  <nav class="menu">
    <ul>
      <!-- tag, exemplo como sendo uma li, active-class indica o css para ativo exact indica o to exato -->
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Início</a>
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active">
        <a>Usuário</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
