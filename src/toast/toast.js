import toast from './toast.vue'
let toastModal = {}
toastModal.install = function (Vue,options) {
  //默认配置选项
  let opts = {
    duration:3000
  }
  for(let props in options){
    if (options.hasOwnProperty(props)) {
      opts[props] = options[props]
    }
  }
  Vue.prototype.$toast = function (message,option) {
    if (typeof message !== 'string') {
      throw new TypeError('toast message is not String')
    }
    //局部的选项，可以覆盖全局的options
    if (typeof option == 'object') {
      for(let props in option){
        if (option.hasOwnProperty(props)) {
          opts[props] = option[props]
        }
      }
    }
    if (isNaN(Number(opts.duration))) {
      throw new TypeError('toast duration should be Number')
    }
    if (opts.type && ['info','error','success','warning'].indexOf(opts.type) == -1) {
      throw new Error('toast type should be one of "success, warning, info, error"')
    }
    const toastModelConstructor = Vue.extend(toast)
    //实例
    let instance = new toastModelConstructor().$mount(document.createElement('div'))
    instance.message = message
    instance.type = opts.type
    document.body.appendChild(instance.$el)
    Vue.nextTick(function(){
      instance.visible = true
    })
    //定时器关闭
    setTimeout(() => {
      instance.hide = true
      //异步移除dom，让hide的动画完成再移除dom
      setTimeout(() => {
        instance.visible = false
        document.body.removeChild(instance.$el)
      }, 100);
    }, opts.duration);
  }
  //向实例添加更多的方法
  // Vue.prototype.$toast['show'] = function (message, option) {
  //   Vue.prototype.$toast(message, option)
  // }
}
export default toastModal
