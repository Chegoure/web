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

  if (activeThreadId.value === id) {
    activeThreadId.value = 0
    activeThread.value = {}
  }
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
  width: min(1200px, calc(100% - 24px));
  margin: 0 auto;
}

main {
  display: flex;
  gap: 10px;
}

.sidebar {
  width: 30%;
  min-height: 30vw;

  padding: 10px 20px;
  margin-bottom: 15px;

  background-color: #f4e9d3;
  border: 5px solid black;
  border-radius: 8px;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: thin; /* Firefox */
  scrollbar-color: black #efe9db;
}

/* Chrome, Edge, Safari */
.sidebar::-webkit-scrollbar {
  width: 14px;
}

.sidebar::-webkit-scrollbar-track {
  background: #efe9db;
  border-left: 3px solid black;
}

.sidebar::-webkit-scrollbar-thumb {
  background: black;
  border: 3px solid #efe9db;
  border-radius: 4px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #333;
}

.content {
  display: flex;
  flex-direction: column;

  width: 70%;
  min-height: 63vh;
  margin: 0 auto;
  margin-bottom: 15px;
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
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  background-color: #efe9db;

  word-break: break-word;
  overflow-wrap: anywhere;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.thread:hover {
  transform: translateY(-4px);
  box-shadow: 4px 8px 0 0 rgba(0, 0, 0, 0.9);
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
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.log-in__btn:hover {
  transform: translateY(-8px);
  box-shadow: 4px 8px 0 0 rgba(0, 0, 0, 0.9);
}

.thread span {
  cursor: pointer;
  flex-shrink: 0;
  padding-left: 10px;
}

@media (max-width: 1252px) {
  main {
    flex-direction: column;
  }

  .content {
    width: 100%;
    min-height: 63vh;
    box-sizing: border-box;
  }

  .sidebar {
    width: 100%;
    max-height: 280px;
    box-sizing: border-box;
  }

  .header--title {
    font-size: 26px;
  }

  .threads--title,
  .content--title {
    flex-wrap: wrap;
    gap: 10px;
  }
}

@media (max-height: 960px) {
  .content {
    min-height: 55vh;
  }
}

@media (max-height: 900px) {
  .content {
    min-height: 62vh;
  }
}

@media (max-width: 600px) {
  .sidebar {
    margin-bottom: 2px;
  }

  .thread {
    font-size: 14px;
    margin-bottom: 14px;
  }

  .log-in__btn {
    font-size: 13px;
    padding: 8px;
  }

  .header--title {
    font-size: 20px;
    margin: 12px 0;
  }

  .threads--title-name,
  .posts--title {
    font-size: 18px;
  }
}
</style>
