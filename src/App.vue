<template>
  <div id="app">
    <TeleTopBar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TeleBtmBar />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TeleTopBar from "./components/TeleTopBar.vue";
import TeleBtmBar from "./components/TeleBtmBar.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    TeleTopBar,
    TeleBtmBar,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
