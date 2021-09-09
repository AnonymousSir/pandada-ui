import Vue from 'vue'
import App from './App.vue'
import pandaUI from './packages/index.js'

Vue.config.productionTip = false
Vue.use(pandaUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
