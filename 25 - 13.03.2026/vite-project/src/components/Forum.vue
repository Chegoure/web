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
  <h1>Форум</h1>
  <main>
    <div class="sidebar">
      <h2>Темы</h2>
      <ul>
        <li @click="getPosts(thread.id)" v-for="thread in threads">{{ thread.title }}</li>
      </ul>
    </div>
    <div class="content">
      <h2>Посты</h2>
      <ul>
        <li v-for="post in activePosts"> {{ post.content }}</li>
      </ul>
    </div>
  </main>
</div>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  background: #dcdcdc;
}

main {
  display: flex;
}

.sidebar {
  width: 30%;
}

.content {
  width: 70%;
}
</style>
