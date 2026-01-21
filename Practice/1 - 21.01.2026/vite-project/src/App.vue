<script setup>
import {ref} from "vue"
import Columns from "./components/Columns.vue"

const toDo = ref('')
const toDoList = ref([])

const addTask = () => {
  toDoList.value.push({
    taskName: toDo.value,
    isDone: false
  })
}

const removeTask = (index) => {
  toDoList.value.splice(index, 1)
}

</script>

<template>
  <Columns></Columns>
<div class="container">
  <div class="inner">
    <input v-model="toDo" type="text">
    <button @click="addTask">+</button>
  </div>
  <ul>
    <li v-for="(task, index) in toDoList">
      {{ task.taskName }}
      <input class="check-box" v-model="task.isDone" type="checkbox">
      <span @click="removeTask(index)">X</span>
    </li>
  </ul>
</div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  color: white;
  background: radial-gradient(
      circle at top,
      #1a2340 0%,
      #1e2e2e 60%
  );
}

.container {
  width: 500px;
  margin: 24px auto;
}

.inner {
  padding: 24px;
  display: flex;
  background: #0f1115;
  border-radius: 20px;
  margin: 0 -24px;
}

input {
  width: 100%;
  margin-right: 10px;
  border-radius: 10px;
  padding-left: 10px;
  background: #161a22;
  color: white;
}

input[type="checkbox"] {
  accent-color: #1e2e2e ;
}

button {
  background: #232835;
  color: white;
  font-weight: bold;
}

span {
  color: #000000;
  font-weight: bold;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  padding-top: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: 424px 3fr 1fr;
  text-align: left;
  padding-left: 10px;
}
</style>