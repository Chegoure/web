<script setup>
import {onMounted, ref} from 'vue'
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Forum from "./components/Forum.vue";

const user = ref({})
const isLogin = ref(true)

</script>

<template>
  <div v-if="user.id">
    <Forum/>
    {{ user }}
  </div>
  <div v-else>

    <Login v-if="isLogin" @login="user=$event"/>
    <Register v-else @register="user=$event"/>

    <button @click="isLogin=!isLogin">
      {{ isLogin ? 'Зарегистрироваться' : 'Войти' }}
    </button>

  </div>
</template>
