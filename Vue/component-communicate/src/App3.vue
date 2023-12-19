<template>
  <div>
    <Head @add="handle"/>
    <List :msg="msg"/>
    
  </div>
</template>

<script>
import Head from './components/body3/Head.vue'
import List from './components/body3/List.vue'
  export default {
    components:{
      Head,
      List
    },
    methods: {
      // submit () {
      //   if(this.message === '') return
        
      //   this.lists.push(this.message)
      //   this.message = ''
      // }
      handle (message) {
        this.msg = message
      }
    },
    data(){
      return{
        // lists:['html','css']
        msg : ''
      }
    }
  }
</script>

<style  scoped>

</style>