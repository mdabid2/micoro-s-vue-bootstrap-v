import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

//Axios default basURL
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#smartApp')
