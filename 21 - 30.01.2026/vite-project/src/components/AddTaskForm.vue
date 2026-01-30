<script setup>
import Button from "./Button.vue";
import {ref, defineEmits} from "vue";

const emit = defineEmits(['addTask'])

const toDo = ref('')
const addTask = () => {
  emit('addTask', toDo.value)
}

</script>

<template>
  <form @submit.prevent="addTask" >
    <input v-model="toDo" type="text">
    <Button type="primary" text="Добавить задачу" @click="addTask" />
  </form>
</template>
