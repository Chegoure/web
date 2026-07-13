<script setup>
import { onMounted, ref } from 'vue'
import threadApi from '@/api/thread'
import { useToast } from 'vue-toast-notification'

import { useAppStore } from '../store/app.js'
import { storeToRefs } from 'pinia'
import PostListServerPaged from '../components/PostListServerPaged.vue'

const { user, activeThreadId } = storeToRefs(useAppStore())
const $toast = useToast()

const threads = ref([])
const activeThread = ref({})

const getActiveThread = async (id) => {
  const response = await threadApi.getActiveThread(id)
  activeThread.value = response.data
  activeThreadId.value = id
}

const deleteThread = async (id) => {
  await threadApi.deleteThread(id)

  $toast.success('Тема удалена!')

  const deleteIndex = threads.value.findIndex((thread) => thread.id === id)
  threads.value.splice(deleteIndex, 1)
}

onMounted(async () => {
  const response = await threadApi.getThreads()
  threads.value = response.data

  if (activeThreadId.value) {
    getActiveThread(activeThreadId.value)
  }
})
</script>

<template>
  <div class="container">
    <h1 class="header--title">Форум - {{ user.username }}</h1>
    <main>
      <div class="sidebar">
        <div class="threads--title">
          <h2 class="threads--title-name">Темы:</h2>
          <RouterLink to="/thread-create" class="log-in__btn"
            >Создать...</RouterLink
          >
        </div>
        <ul>
          <li
            @click="getActiveThread(thread.id)"
            class="thread"
            v-for="thread in threads"
          >
            {{ thread.title }}
            <span @click="deleteThread(thread.id)">x</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="content--title">
          <h2 class="posts--title">Посты:</h2>
          <RouterLink
            v-if="activeThreadId"
            to="/post-create"
            class="log-in__btn"
            >Создать...</RouterLink
          >
        </div>
        <PostListServerPaged />
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  /* background: #dcdcdc; */
}

main {
  display: flex;
  gap: 10px;
}

.sidebar {
  width: 30%;
  height: 30vw; /*пока что*/
  padding: 10px;

  background-color: #f4e9d3;
  border: 5px solid black;
  border-radius: 8px;
}

.content {
  width: 70%;
  margin: 0 auto;
  padding: 10px 20px;

  background-color: #f4e9d3;
  border: 5px solid black;
  border-radius: 8px;

  /* background-image: url('../assets/bg.png'); */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
}

.content--title {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 74px;
}

.thread {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  /* background-color: #f4e9d3; */
  background-color: #efe9db;
}

.header--title {
  padding: 2px;
  margin: 20px 0;

  text-align: center;
  background-color: #f4e9d3;
  border: 5px solid;
  border-radius: 8px;
}

.threads--title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.threads--title-name {
  padding-bottom: 10px;
  text-align: center;
}

.posts--title {
  padding-bottom: 10px;
  text-align: center;
}

.log-in__btn {
  margin: 10px 0;
  padding: 10px;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  background-color: #efe9db;
  transform: translateY(-5px);
}
</style>
