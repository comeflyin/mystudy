 <template>
  <div class="head">
      <input type="text" name="" id="" v-model="message">
      <button @click="submit">确定</button>
    </div>
 </template>
 
 <script>
  export default {
    methods: {
      data() {
        return {
        message:'js'
        }
      },
      submit () {
        if(this.message === '') return
        
        // this.lists.push(this.message)
        // 将message传递给父组件使用
        this.$emit('add',this.message)

        this.message = ''
      }
    }
  }
 </script>
 
 <style lang="scss" scoped>
 
 </style>