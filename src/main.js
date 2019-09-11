import Vue from 'vue'
import App from './test/App.vue'
import vueModalPlugins from './toast/toast'
Vue.use(vueModalPlugins)

new Vue({
  el: '#app',
  render: h => h(App)
})
