<template>
  <b-container fluid id="app">
    <Header></Header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </b-container>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
  box-sizing: border-box;
}
.slide {
  &-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  &-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
