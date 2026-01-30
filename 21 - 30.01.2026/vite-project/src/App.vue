<script setup>
import {ref} from "vue";
import Button from './components/Button.vue'
import AddTaskForm from './components/AddTaskForm.vue'
import TaskList from "./components/TaskList.vue";

const toDoList = ref([])

const addTask = (toDo) => {
  toDoList.value.push({
    id: Date.now(),
    name: toDo,
    isDone: false
  })
}
</script>

<template>
<div class="container">
  <AddTaskForm @addTask="addTask"/>
  <TaskList :toDoList="toDoList"/>
</div>
</template>

<style scoped>

</style>
