import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bootstrap from './assets/js/bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false
Vue.use(Bootstrap);

window.$ = require('jquery')
window.JQuery = require('jquery') 

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app')
