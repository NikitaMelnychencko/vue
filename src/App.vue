<template>
  <div id="app">
    <ButtonTest>WTF?</ButtonTest>
    <FirstTitle></FirstTitle>
  </div>
</template>

<script>
import ButtonTest from "./components/Button.js";
import FirstTitle from "./components/FirstTitle";

export default {
  name: "App",
  components: {
    ButtonTest,
    FirstTitle,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
