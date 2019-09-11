<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2 @click="toast">Click me</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Thank you for using toast plugin'
    }
  },
  created(){

  },
  methods:{
    toast(){
      this.$toast("没有更多了!!!>_",{duration:3000,type:'success'})
    }
  }
}
</script>
<style>
</style>
