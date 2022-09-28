import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Notifications from 'vue-notification';

import './assets/scss/style.scss';

Vue.config.productionTip = false;
Vue.use(Notifications);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
