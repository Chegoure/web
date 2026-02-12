<script setup>
import Button from "./kit/Button.vue";
import Input from "./kit/Input.vue";
import {ref, defineEmits} from "vue";

const emit = defineEmits(['addTask'])
const toDo = ref('')

const addTask = () => {
  emit('addTask', toDo.value)
  toDo.value = ''
}

</script>

<template>
  <form @submit.prevent="addTask" >
    <input v-model="toDo" type="text">
    <Input v-model="toDo"/>
    <Button type="primary" @click="addTask">
      <template v-slot:icon>❤</template>
      Добавить задачу
    </Button>
  </form>
</template>
