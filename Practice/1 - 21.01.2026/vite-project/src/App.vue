<script setup>
import {ref} from "vue"
import Columns from "./components/Columns.vue"

const toDo = ref('')
const toDoList = ref([{
  taskName: 'Чтобы изменить заметку, введите новый текст в поле ниже, затем выберите заметку и нажмите «Изменить здесь».',
  isDone: false
}])

const toDoEdit = ref('')


const addTask = () => {
  toDoList.value.push({
    taskName: toDo.value,
    isDone: false
  })
}

const removeTask = (index) => {
  toDoList.value.splice(index, 1)
}

const editTask = (index) => {
  toDoList.value.splice(index, 1, {
    taskName: toDoEdit.value,
    isDone: false
  })
}

</script>

<template>
  <Columns></Columns>
<div class="container">
  <div class="inner">
    <input v-model="toDo" type="text" placeholder="Ваша задача">
    <button @click="addTask">+</button>
  </div>
  <ul>
    <li v-for="(task, index) in toDoList">
      {{ task.taskName }}
      <input v-model="task.isDone" class="check-box" type="checkbox">
      <span @click="editTask(index)" class="btn-edit">Изменить здесь</span>
      <span @click="removeTask(index)" class="remove-task">X</span>
    </li>
  </ul>
  <div class="edit">
    <input v-model="toDoEdit" class="edit-input" type="text" placeholder="Текст для изменения...">
  </div>
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
  align-self: center;
  accent-color: #1e2e2e;
}

.btn-edit {
  align-self: center;
}

button {
  background: #232835;
  color: white;
  font-weight: bold;
}

.edit {
  padding: 24px;
  display: flex;
  background: #0f1115;
  border-radius: 20px;
  margin: 10px -24px;
  height: 37px;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  margin-top: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  text-align: left;
  padding: 10px;
  gap: 10px;
  word-break: break-word;
  background: #161a22;
  border-radius: 10px;
}

.remove-task {
  font-size: 16px;
  color: #d66;
  font-weight: bold;
  align-self: center;
}
</style>

align-self: center;