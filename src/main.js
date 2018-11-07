import Vue from 'vue'
import App from './App.vue'
import  VueRouter  from 'vue-router';
import { routes } from './routes';
import store from './store/store';


Vue.use(VueRouter);
Vue.use(VueResource);
vue.http.options.root = 'https://stock-trader-34e57.firebaseio.com/';
Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
})


const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
