<template>
  <b-container fluid id="app">
    <Header></Header>
    <router-view></router-view>
  </b-container>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header: Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
</style>
