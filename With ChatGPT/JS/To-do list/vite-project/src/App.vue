<script setup>
import { ref } from 'vue'

const tasks = ref([])
const newTask = ref('') 

const addTask = () => {
  tasks.value.push({
    id: Date.now(),
    name: newTask.value,
    done: false
  })
  newTask.value = ''
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>

<template>
<div>
  <input v-model="newTask" type="text">
  <button @click="addTask">Добавить</button>

  <ul>
    <li v-for="task in tasks" key="task.id">
      {{ task.name }}
      <button @click="removeTask(task.id)">❌</button>
    </li>
  </ul>
</div>
</template>

<style scoped>
</style>
