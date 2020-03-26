import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Routes from './routes/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


