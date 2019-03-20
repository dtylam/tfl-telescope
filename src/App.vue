<template>
  <md-app id="app">
    <TeleTopBar />
    <md-app-content id="page">
      <SearchBar label="Vehicle ID"/>
    </md-app-content>
    
    <TeleBtmBar />
  </md-app>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import TeleTopBar from "./components/TeleTopBar.vue";
import TeleBtmBar from "./components/TeleBtmBar.vue";

export default {
  name: "app",
  components: {
    SearchBar,
    TeleTopBar,
    TeleBtmBar,
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#page {
  min-height: 60vh;
}
</style>
