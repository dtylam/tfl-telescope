import Vue from 'vue'
import App from './App.vue'
import { MdToolbar, MdButton, MdIcon } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.config.productionTip = false

Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
