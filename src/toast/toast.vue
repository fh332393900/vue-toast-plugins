
<template>
  <div class="toast" :class="{vue_toast_hide: hide,
                              vue_toast_error:type == 'error',
                              vue_toast_info:type == 'info',
                              vue_toast_success:type == 'success',
                              vue_toast_warning:type == 'warning'}"
                       v-show="visible">
    {{ message }}
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      message: 'hello world!',
      visible: '',
      type:'',
      hide:''
    }
  },
  methods: {

  },
  watch:{
    hide(){
      console.log(this.hide)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 15vh;
  left: 38vw;
  min-width: 20vw;
  max-width: 100vw;
  font-size: 18px;
  text-align: center;
  padding: 15px 2vw;
  border-radius: 40px;
  background-color: #409EFF;
  box-shadow: 0 .2em .1em .1em rgba(72, 187, 248, .2);
  color: white;
  letter-spacing: 3px;
  animation: toast-move-in-top cubic-bezier(.22, .58, .12, .98) .4s;
}
/* .toast{
  position: fixed;
  bottom: 15vh;
  left: 28vw;
  min-width: 40vw;
  max-width: 100vw;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 8px;
  white-space: nowrap;
  color: #fff;
  background-color: #000;
  animation: toast-move-in-top cubic-bezier(.22, .58, .12, .98) .4s;
  z-index: 10000;
} */
.vue_toast_info {
  background-color: #409EFF;
  box-shadow: 0 .2em .1em .1em rgba(72, 187, 248, .2);
}
.vue_toast_success {
  background-color: #47d279;
  box-shadow: 0 .2em .1em .1em rgba(71, 210, 121, .2);
}
.vue_toast_warning {
  background-color: #ffb243;
  box-shadow: 0 .2em .1em .1em rgba(255, 190, 68, .2);
}
.vue_toast_error {
  background-color: #ff7171;
  box-shadow: 0 .2em 1em .1em rgba(255, 100, 100, .2);
}
.vue_toast_hide {
  animation: toast-fade-out cubic-bezier(.22, .58, .12, .98) .4s forwards;
}
@keyframes toast-move-in-top {
  from {
    opacity: 0;
    transform: translate(0, 5em);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes toast-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
