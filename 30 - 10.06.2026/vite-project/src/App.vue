<script setup>
import { onMounted } from 'vue'
import { useAppStore } from './store/app.js'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { init } = appStore
const { user } = storeToRefs(appStore)

onMounted(() => {
  init()
})
</script>

<template>
  <nav>
    <div v-if="!user.id">
      <RouterLink to="/login"> Login</RouterLink>
      <RouterLink to="/register"> Register</RouterLink>
    </div>
    <!--    <div v-else>-->
    <!--      <RouterLink to="/"> Home</RouterLink>-->
    <!--      <RouterLink to="/thread-create"> Create-Thread</RouterLink>-->
    <!--      <RouterLink to="/post-create"> Create-Post</RouterLink>-->
    <!--    </div>-->
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
}

body {
  background-color: #f4e9d3;
}

li {
  list-style-type: none;
  cursor: pointer;
}

.container-big {
  width: min(1400px, calc(100% - 32px));
  min-height: 80vh;
  margin: 30px auto;
  position: relative;
  z-index: 0;

  border: 5px solid black;
  border-radius: 8px;

  background-image: url('./assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 1200px) {
  .container-big {
    width: calc(100% - 24px);
  }
}

@media (max-width: 768px) {
  .container-big {
    width: calc(100% - 16px);
    margin: 10px auto;
    @media (max-width: 1200px) {
      .container-big {
        width: calc(100% - 24px);
      }
    }

    @media (max-width: 768px) {
      .container-big {
        width: calc(100% - 16px);
        margin: 10px auto;
        border-width: 3px;
        /* min-height: auto; */
      }
    }
  }
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
