import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import Paginate from 'vuejs-paginate'
import store from "./store";
import 'materialize-css/dist/css/materialize.min.css';

Vue.config.productionTip = false;
Vue.component('Paginate', Paginate)
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
