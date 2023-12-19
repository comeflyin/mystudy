<template>
  <div>
    <Head/>
    <List/>
    
  </div>
</template>

<script>
import Head from './components/body4/Head.vue'
import List from './components/body4/List.vue'
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