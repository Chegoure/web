<script setup>
import axios from 'axios'
import {useToast} from 'vue-toast-notification';
import { ref } from 'vue'

const $toast = useToast();

const emit = defineEmits(['register'])

const name = ref('')
const password = ref('')

const register = async () => {
  const response = await axios.post('http://localhost:3000/api/register', {
    username: name.value,
    password: password.value
  })
  emit('register', response.data)
  console.log(response)
  $toast.success(`${response.statusText} ${response.status} ${response.data.username}`);
}

</script>

<template>
  <div>Регистрация</div>
  <div>
    <input v-model="name" placeholder="username" type="text">
    <input v-model="password" placeholder="password" type="text">
    <button @click="register">Зарегистрироваться</button>
  </div>
</template>
