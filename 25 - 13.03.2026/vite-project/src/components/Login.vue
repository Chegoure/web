<script setup>
import axios from 'axios'
import {useToast} from 'vue-toast-notification';
import { ref } from 'vue'

const $toast = useToast();

const name = ref('')
const password = ref('')

const emit = defineEmits(['login'])

const login = async () => {
  const response = await axios.post('http://localhost:3000/api/login', {
    username: name.value,
    password: password.value
  })
  emit('login', response.data.user)
  console.log(response)
  console.log(response.data.user.id)
  $toast.success(`Успешный вход, ${response.data.user.username}!`);
}

</script>

<template>
  <div>Войти</div>
  <div>
    <input v-model="name" placeholder="username" type="text">
    <input v-model="password" placeholder="password" type="text">
    <button @click="login">Войти</button>
  </div>
</template>
