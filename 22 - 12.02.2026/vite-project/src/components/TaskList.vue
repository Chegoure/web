<script setup>
import Button from "./kit/Button.vue";
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
      
      <span :class="task.isDone ? 'is_done' : '' ">{{ task.name }}</span>
      
      <Button type="info" @click="editId = task.id">Изменить</Button>
      <div v-if="editId === task.id">
        <input v-model="task.name" type="text">
        <Button type="success" @click="editId = 0">Готово</Button>
      </div>
    </li>
  </ul>
</template>

<style scoped>

.is_done {
  text-decoration: line-through;
}

</style>