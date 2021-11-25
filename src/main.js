import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import reranking from './reranking.vue'
import sentence from './sentence.vue'
import keyword from './keyword.vue'
import axios from 'axios'

Vue.config.productionTip = false;

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(VueRouter);

const routes = [
  { path: '/keyword', component: keyword },
  { path: '/sentence', component: sentence },
  { path: '/reranking', component: reranking },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
