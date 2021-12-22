import Vue from "vue";

import "normalize.css";
import App from "./App";
import router from "./router"

Vue.config.productionTip = false

import { Picker, Popup, DatetimePicker } from "vant";

Vue.use(Picker);
Vue.use(Popup);
Vue.use(DatetimePicker);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")