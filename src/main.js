import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
import store from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
