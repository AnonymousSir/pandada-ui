import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import pandaUI from './packages/index.js'
=======
import pandaUI from '../packages/index.js'
>>>>>>> master

Vue.config.productionTip = false
Vue.use(pandaUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
