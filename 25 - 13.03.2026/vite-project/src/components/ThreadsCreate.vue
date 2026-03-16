<script setup>
import axios from 'axios'
import {useToast} from 'vue-toast-notification';
import { ref } from 'vue'

const $toast = useToast();

const title = ref('')
const content = ref('')
const authorId = ref('')

const create = async () => {
  const response = await axios.post('http://localhost:3000/api/threads', {
    title: title,
    content: content,
    author_id: authorId
  })
  console.log(response)
  $toast.success(`Тема создана, ${response.data.user.username}!`);
}

</script>

<template>
  <div>Создать тему</div>
  <div>
    <input v-model="title" placeholder="title" type="text">
    <input v-model="content" placeholder="content" type="text">
    <input v-model="authorId" placeholder="author_id" type="text">
    <button @click="create">+</button>
  </div>
</template>
