<script setup>
// 以组件为开发单元
import {ref} from 'vue'
// const todos = ref([
//   {text:'haha'}
// ])

// todos 来到 vuex mapState Pinia
import { useTodoStore } from './store/todo.js'
import TodoList from './components/TodoList.vue'



const { todos,addTodo } = useTodoStore() 
// console.log(todoStore.todos);

</script>

<template>
  <div>
    <TodoList 
    :todos="todos" 
    :addTodo="addTodo"
    />
    <!-- <Item/>
    <Bang :title="作者榜" :item="authors"/> -->
  </div>
</template>

<style scoped>
</style>
