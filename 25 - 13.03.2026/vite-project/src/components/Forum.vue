<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";

defineProps({
  id: Number
})

const threads = ref([])
const activePosts = ref([])

const getPosts = async (id) => {
  const response = await axios.get('http://localhost:3000/api/threads/' + id)
  console.log(response)
  activePosts.value = response.data.posts
}


onMounted(async () => {
  const response = await axios.get('http://localhost:3000/api/threads')
  console.log(response)
  threads.value = response.data
})

</script>

<template>
<div class="container">
  <h1 class="header--title">Форум</h1>
  <main>
    <div class="sidebar">
      <h2 class="threads--title">Темы:</h2>
      <ul>
        <li @click="getPosts(thread.id)" class="thread" v-for="thread in threads">{{ thread.title }}</li>
      </ul>
    </div>
    <div class="content">
      <h2 class="posts--title">Посты:</h2>
      <ul>
        <li v-for="post in activePosts" class="post">{{ post.content }}</li>
      </ul>
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
  height: 30vw;  /*пока что*/
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
  background-color:#f4e9d3;
  border: 5px solid;
  border-radius: 8px;
}

.threads--title {
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

</style>

 