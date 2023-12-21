<template>
  <div>
    <itemContainer parent-component="item"/>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer.vue'
import { mapActions } from 'vuex'
  export default {
    components:{
      itemContainer
    },
    created(){
      this.getQuestionListAction()
    },
    methods:{
      ...mapActions([
        'getQuestionListAction',
        
      ])
    },
  }
</script>

<style lang="less" scoped>

</style>