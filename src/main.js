import Vue from "vue";
import App from "./App.vue";
import router from "Setup/router";
import store from "Setup/store";
import i18n from "Setup/i18n";
import directives from "Setup/directives";
import "bootstrap";
import "Setup/navigationGuard";

const result = require('dotenv').config({ debug: process.env.DEBUG });
if (result.error) {
  throw result.error;
}

Vue.config.productionTip = false;

// Add directive "v-click-outside" on element outside click
Vue.directive("click-outside", directives.clickOutside);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
