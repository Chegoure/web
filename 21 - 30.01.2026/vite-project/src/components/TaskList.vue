<script setup>
import Button from "./Button.vue";
import {defineProps, ref} from "vue";

const editId = ref(0)

defineProps({
  toDoList: Array // toDoList = ref([])
})
</script>

<template>
  <ul>
    <li v-for="task in toDoList">
      <input v-model="task.isDone" type="checkbox">
      
      <span v-if="!task.isDone">{{ task.name }}</span>
      <span v-else style="text-decoration: line-through">{{ task.name }}</span>
      
      <Button type="info" text="Изменить" @click="editId = task.id"/>
      <div v-if="editId === task.id">
        <input v-model="task.name" type="text">
        <Button type="success" text="Готово" @click="editId = 0"/>
      </div>
    </li>
  </ul>
</template>
