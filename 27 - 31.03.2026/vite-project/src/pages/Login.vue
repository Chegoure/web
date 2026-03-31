<script setup>
import axios from 'axios'
import {useToast} from 'vue-toast-notification';
import { ref } from 'vue'

const $toast = useToast();

const name = ref('')
const password = ref('')

const login = async () => {
  const response = await axios.post('http://localhost:3000/api/login', {
    username: name.value,
    password: password.value
  })
  localStorage.setItem('user', JSON.stringify(response.data.user))
  console.log(response)
  console.log(response.data.user.id)
  $toast.success(`Успешный вход, ${response.data.user.username}!`);
}

</script>

<template>

  <div class="log-in__form">
    <h1 class="header--title">Форум</h1>
    <input v-model="name" placeholder="username" type="text">
    <input v-model="password" placeholder="password" type="text">
    <button class="log-in__btn" @click="login">Войти</button>
  </div>  


</template>

<style scoped>

.log-in__form {
  display: flex;
  justify-content: center; /* по горизонтали */
  align-items: center;
  height: 40vw;
  flex-direction: column;
}

.header--title {
  padding: 0 100px;
  margin: 12px 0;
  font-size: 60px;

  text-align: center;
  /* background-color: #f4e9d3;
  border: 5px solid;
  border-radius: 8px; */
}

input {
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 5px solid;
  background-color: #efe9db;
}

.log-in__btn {
  margin-top: 10px;
  padding: 14px;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
  background-color: #f4e9d3;
}

</style>
