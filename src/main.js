import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'
import store from '../store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);






new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {undefined

  document.title = to.meta.title
  
  next()
  
  })