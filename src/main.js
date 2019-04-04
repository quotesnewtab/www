import Vue from 'vue'
import App from './App.vue'
import router from './router'
import EvaIcons from 'vue-eva-icons'
import VueScrollactive from 'vue-scrollactive'

Vue.config.productionTip = false

Vue.use(EvaIcons)
Vue.use(VueScrollactive)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
