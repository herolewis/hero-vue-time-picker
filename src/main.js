import Vue from "vue";
import App from "./App.vue";
import "./lib/flexible.js";
import vueTimeLewis from "./lib/index.js";
Vue.use(vueTimeLewis);
new Vue({
  el: "#app",
  render: h => h(App)
});
