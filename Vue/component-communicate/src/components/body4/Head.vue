<template>
  <div class="head">
      <input type="text" name="" id="" v-model="message">
      <button @click="submit">确定</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        // lists:['html',' css'],
        message:''
      }
    },
    methods: {
      submit () {
        this.listsAdd(this.message)
      },
      ...mapMutations(['listsAdd'])
    },
    
  }
</script>

<style scoped>

</style>