<script setup>

import { computed, ref } from 'vue'

const props = defineProps({
  posts: Array
})

const page = ref(0)
const perPage = ref(3)
const lastPage = computed(() => {
  return Math.round(props.posts.length / perPage.value - 1)
})
const pagePosts = computed(() => {
  const start = page.value * perPage.value
  return props.posts.slice(start, start + perPage.value)
})

const setPage = (newPage) => {
  page.value = newPage
}

const emit = defineEmits(['deletePost'])
const deletePost = (id) => {
  emit('deletePost', id)
}

</script>

<template>
  <ul>
    <li v-for="post in pagePosts" class="post">
      <div class="post-wrapper">
        {{ post.author_name }}:
        {{ post.content }}
      </div>
      <span @click="deletePost(post.id)">x</span>
    </li>
  </ul>
  <div v-if="posts.length" class="pagination-panel">
    <span v-if="page > 0" @click="setPage(page - 1)"><</span>
    <div>
      <span>{{page}}</span>
      <span v-if="lastPage > page + 1" @click="setPage(page + 1)" >{{page + 1}}</span>
      <span v-if="lastPage > page + 1" @click="setPage(page + 2)" >{{page + 2}}</span>
      <span v-if="lastPage > page + 1" @click="setPage(page + 1)" >></span>
      <span @click="setPage(lastPage)"> ...{{lastPage}}</span>
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 10px;
  margin-bottom: 14px;

  /* background-color: #f4e9d3; */
  background-color: #efe9db;

  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
}
</style>
