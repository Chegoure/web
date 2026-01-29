<script setup>
import { ref } from "vue"

const toDo = ref('')
const toDoList = ref([])

const addToDo = () => {
  toDoList.value.push({
    toDoName: toDo.value,
    isDone: false
  })
}

const removeToDo = (i) => {
toDoList.value.splice(i, 1)
}
</script>

<template>
<div class="container">
  <input v-model="toDo" type="text">
  <button @click="addToDo">Добавить</button>
  <ul>
    <li v-for="(task, i) in toDoList">
      {{ task.toDoName }}
      <input v-model="task.isDone" type="checkbox">
      <button @click="removeToDo(i)">удалить</button>
    </li>
  </ul>
</div>
</template>

<style scoped> 

</style>