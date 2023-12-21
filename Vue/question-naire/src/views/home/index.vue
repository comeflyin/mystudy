<template>
  <div>
     <div class="home_container" > 
      <itemContainer parent-component="home"/>
     </div>
  </div>
</template>

<script>
import itemContainer from '@/components/itemContainer.vue'
  export default {
    components:{
      itemContainer
    }
    
  }
</script>

<style lang="less" scoped>

</style>