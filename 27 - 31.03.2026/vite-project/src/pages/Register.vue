<script setup>
import { ref } from 'vue'
import { useAppStore } from '../store/app.js'

const { register } = useAppStore()

const name = ref('')
const password = ref('')

const handleRegister = async () => {
 await register(name.value, password.value)
}

</script>

<template>
  <div class="registration__form">
    <h1 class="header--title">Форум</h1>
    <input v-model="name" placeholder="username" type="text">
    <input v-model="password" placeholder="password" type="text">
    <button class="registration__btn" @click="handleRegister">Зарегистрироваться</button>
  </div>
</template>

<style scoped>
.registration__form {
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

.registration__btn {
  margin-top: 10px;
  padding: 14px;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
  background-color: #f4e9d3;
}

</style>