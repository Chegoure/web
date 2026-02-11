<script setup>
import { ref } from 'vue'
import TaskItem from './components/TaskItem.vue'

const tasks = ref([])
const newTask = ref('') 

const addTask = () => {
  if (!newTask.value) return

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
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      
      :task="task"
      @remove="removeTask"
    />
  </ul>
</div>
</template>

<style scoped>
</style>
❌