<script setup>
import { onMounted } from 'vue'
import { useAppStore } from './store/app.js'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
console.log(appStore)
const { init } = appStore
const { user } = storeToRefs(appStore)

onMounted(() => {
  init()
})

</script>

<template>
  <nav>
    <div v-if="!user.id" >
      <RouterLink to="/login"> Login</RouterLink>
      <RouterLink to="/register"> Register</RouterLink>
    </div>
    <div v-else>
      <RouterLink to="/"> Home</RouterLink>
      <RouterLink to="/thread-create"> Create-Thread</RouterLink>
      <RouterLink to="/post-create"> Create-Post</RouterLink>
    </div>

  </nav>
  <main>
    <div class="container-big">
      <RouterView />
    </div>
  </main>
</template>

<style>
* {
  font-family: 'Press Start 2P', sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
}

body {
  background-color: #f4e9d3;
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