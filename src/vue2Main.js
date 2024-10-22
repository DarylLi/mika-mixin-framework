// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "../extra/vue2/dist/vue.common.dev";
import App from "./app2.2ue";

window.Vue = Vue;
// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#vue2Entry",
  components: { App },
  template: "<App/>",
});
