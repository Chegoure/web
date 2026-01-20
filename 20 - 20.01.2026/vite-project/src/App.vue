<script setup>
import {ref} from "vue";
const task = ref('')
const list = ref([])

const add = () => {
  list.value.push({
    taskName: task.value,
    isDone: false
  })
}

const remove = (index) => {
  list.value.splice(index, 1)
}

</script>

<template>
  <div class="wrapper">
    <div class="inner">
    <input v-model="task" type="text">
    <button @click="add">+</button>
    </div>
    <ul>
      <li v-for="(item, index) in list">
        {{item.taskName}}
        <input v-model="item.isDone" type="checkbox">
        <span @click="remove(index)">x</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.wrapper {
  width: 500px;
}

.inner {
  padding-right: 16px;
  display: flex;
}

input {
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;
}

li {

  padding-top: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: 450px 1fr 1fr;
}

</style>
