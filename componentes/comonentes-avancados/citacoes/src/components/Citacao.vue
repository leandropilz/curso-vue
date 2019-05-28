<template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot></slot>
    <slot name="fonte"></slot>
    <!-- Div especifica do Vue que aceita elementos. -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
