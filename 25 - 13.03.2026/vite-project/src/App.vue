<script setup>
import { ref } from 'vue'
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Forum from "./components/Forum.vue";

const user = ref({})
const isLogin = ref(true)

</script>

<template>
  <div class="container-big">
    <div v-if="user.id">
      <Forum :id="user.id"/>
    </div>
    <div v-else>

      <Login v-if="isLogin" @login="user=$event"/>
      <Register v-else @register="user=$event"/>

      <button @click="isLogin=!isLogin">
        {{ isLogin ? 'Зарегистрироваться' : 'Войти' }}
      </button>

    </div>
  </div>

</template>

<style>

* {
  font-family: "Press Start 2P", sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
}

body {
  background-color: #f4e9d3 ;

}

li {
  list-style-type: none;
  cursor: pointer;
}

.container-big {
  width: 1400px;
  height: 40vw; /* Пока что */
  margin: 30px auto;
  position: relative; /*Добавил для блюра*/
  z-index: 0; /*Добавил для блюра*/
  
  border: 5px solid black;
  border-radius: 8px;
  
  background-image: url('./assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

}

/* .container-big::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: url('./assets/bg.png');
  background-size: cover;
  background-position: center;

  filter: blur(10px);

  z-index: -1;
} */

</style>
