<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import ThreadsCreate from './ThreadsCreate.vue'
import PostCreate from './PostCreate.vue'
import { useToast } from 'vue-toast-notification'

defineProps({
  user: Object,
})
const $toast = useToast()
const threads = ref([])
const activeThread = ref({})
const isCreateThread = ref(false)
const isCreatePost = ref(false)

const getPosts = async (id) => {
  const response = await axios.get('http://localhost:3000/api/threads/' + id)
  console.log(response)
  activeThread.value = response.data
}

const deleteThread = async (id) => {
  const response = await axios.delete('http://localhost:3000/api/threads/' + id)
  console.log(response)
  $toast.success(`Тема удалена!`)
  const deleteIndex = threads.value.findIndex((thread)=>{
    return thread.id === id
  })
  threads.value.splice(deleteIndex, 1)
}

const deletePost = async (id) => {
  const response = await axios.delete('http://localhost:3000/api/posts/' + id)
  console.log(response)
  $toast.success(`Пост удален!`)
  const deleteIndex = activeThread.value.posts.findIndex((post)=>{
    return post.id === id
  })
  activeThread.value.posts.splice(deleteIndex, 1)
}


const onCreateThread = (thread) => {
  isCreateThread.value = false
  threads.value.push(thread)
}

const onCreatePost = (post) => {
  isCreatePost.value = false
  activeThread.value.posts.push(post)
}

onMounted(async () => {
  const response = await axios.get('http://localhost:3000/api/threads')
  console.log(response)
  threads.value = response.data
})
</script>

<template>
  <div v-if="!isCreateThread && !isCreatePost" class="container">
    <h1 class="header--title">Форум {{ user.username }}</h1>
    <main>
      <div class="sidebar">
        <div class="threads--title">
          <h2 class="threads--title-name">Темы:</h2>
          <button @click="isCreateThread = true" class="log-in__btn">
            Создать...
          </button>
        </div>
        <ul>
          <li
            @click="getPosts(thread.id)"
            class="thread"
            v-for="thread in threads"
          >
            {{ thread.title }}
            <span @click="deleteThread(thread.id)">x</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <h2 class="posts--title">
          Посты:
          <button
            v-if="activeThread.id"
            @click="isCreatePost = true"
            class="log-in__btn"
          >
            Создать...
          </button>
        </h2>

        <ul>
          <li v-for="post in activeThread.posts" class="post">
            <div class="post-wrapper">
              {{ post.author_name }}:
              {{ post.content }}
            </div>
            <span @click="deletePost(post.id)">x</span>
          </li>
        </ul>
      </div>
    </main>
  </div>

  <ThreadsCreate
    v-if="isCreateThread"
    @onCreate="onCreateThread"
    @back="isCreateThread = false"
    :userId="user.id"
  />
  <PostCreate
    v-if="isCreatePost"
    @onCreate="onCreatePost"
    @back="isCreatePost = false"
    :threadId="activeThread.id"
    :userId="user.id"
  />
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

.thread {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
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

.post {
  padding: 10px;
  margin-bottom: 14px;

  /* background-color: #f4e9d3; */
  background-color: #efe9db;

  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
}

.log-in__btn {
  margin: 10px 0;
  padding: 10px;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
  background-color: #efe9db;
  transform: translateY(-5px);
}
</style>
