<template>
  <div>
    <h1 class="font-bold text-xl md:text-3xl text-center">DIY Form Validation in Vue 3</h1>
    <BaseForm title="Little Little Form" />
  </div>
</template>

<script>
import BaseForm from "./components/BaseForm.vue";

export default {
  name: "App",
  components: {
    BaseForm
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
