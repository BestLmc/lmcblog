import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Antd);

import service from '@/api/http.js'   // 记得改为你的路径
Vue.prototype.rq = service  // 此处命名为rq,你可以改
// 引入mock
require('../mock');

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount("#app");
