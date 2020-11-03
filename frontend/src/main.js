import Vue from 'vue'
import App from './App.vue'
window._ = require('lodash');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios';
import router from './router.js';

Vue.config.productionTip = false

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = axios;
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
