<script setup>
import { onMounted, ref } from 'vue'
import Register from './Register.vue'
import Login from './Login.vue'
import Forum from './Forum.vue'

const user = ref({})
const isLogin = ref(true)

const signIn = (u) => {
  user.value = u
  localStorage.setItem('user', JSON.stringify(u))
}

onMounted(()=>{
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  }
})

</script>

<template>

  <div v-if="user.id">
    <Forum :user="user" />
  </div>
  <div v-else>
    <Login v-if="isLogin" @login="signIn" />
    <Register v-else @register="signIn" />

    <button @click="isLogin = !isLogin">
      {{ isLogin ? 'Зарегистрироваться' : 'Войти' }}
    </button>
  </div>

</template>


