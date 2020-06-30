import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import Cloudinary from 'cloudinary-vue';
// Vue.use(Cloudinary, {
//   configuration: {
//     cloudName: "demo"
//   }
// });
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

