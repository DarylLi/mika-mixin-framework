// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from "../extra/vue2/dist/vue.common.dev";
// import Vue from "../extra/vue2/dist/vue.common.dev";
import Vue from "vue2/dist/vue.common.dev";
import App from "./vue2/app2.vue";
// new (_extra_vue2_dist_vue_common_dev__WEBPACK_IMPORTED_MODULE_1___default())({
window.Vue = Vue;
// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#vue2Entry",
  components: { App },
  template: "<App/>",
});
