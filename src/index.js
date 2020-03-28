import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Routes from './routes/routes.js';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart));

const router = new VueRouter({
  routes: Routes
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


