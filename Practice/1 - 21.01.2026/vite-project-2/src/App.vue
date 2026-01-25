<script setup>
import {ref} from "vue";
const isShow = ref(false)
const editTask = () => {

}
const showInput = () => {
isShow.value = !isShow.value
}
const removeTask = (i) => {
todoList.value.splice(i, 1)
}
const addTask = (todo) => {
  todoList.value.push(todo)
}
const todo = ref('')
const todoList = ref([])
</script>

<template>
<div>
  <input v-model="todo" type="text">
  <button @click="addTask(todo)">+</button>
</div>
<ul>
  <li v-for="(task, i) in todoList">
    {{task}}
    <span @click="removeTask(i)">(удалить)</span>
  </li>
</ul>

</template>

<style scoped>

</style>
