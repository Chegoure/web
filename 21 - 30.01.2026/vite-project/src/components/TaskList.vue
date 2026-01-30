<script setup lang="ts">
import Button from "./Button.vue";
import {defineProps, ref} from "vue";

const editId = ref(0)

defineProps({
  toDoList: Array
})
</script>

<template>
  <ul>
    <li v-for="task in toDoList">
      {{task.name}}
      <input v-model="task.isDone" type="checkbox">
      <Button type="info" text="Изменить" @click="editId = task.id"/>
      <div v-if="editId === task.id">
        <input v-model="task.name" type="text">
        <Button type="success" text="Готово" @click="editId = 0"/>
      </div>
    </li>
  </ul>
</template>
