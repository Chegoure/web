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
      <span @click="deletePost(post.id)" class="post-delete">x</span>
    </li>
  </ul>
  <div v-if="posts.length" class="pagination-panel">
    <div>
      <span v-if="page > 0" @click="setPage(page - 1)" class="panel-switch-page"><</span>
      <span class="panel-switch-page">{{page}}</span>
      <span v-if="lastPage > page + 1" @click="setPage(page + 1)" class="panel-switch-page">{{page + 1}}</span>
      <span v-if="lastPage > page + 1" @click="setPage(page + 2)" class="panel-switch-page">{{page + 2}}</span>
      <span v-if="lastPage > page + 1" @click="setPage(page + 1)" class="panel-switch-page">></span>
      <span @click="setPage(lastPage)" class="panel-switch-page"> ...{{lastPage}}</span>
    </div>
  </div>
</template>

<style scoped>

.post {
  display: flex;

  padding: 10px;
  margin-bottom: 14px;

  background-color: #efe9db;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);

  min-height: 126px;
  /* overflow-y: auto; */
}

.post-delete {
  font-weight: bold;
  margin-left: 5px;
  max-height: 25px;
}

.pagination-panel {
  display: flex;
  justify-content: center;
  padding-top: 12px;
}

.panel-switch-page {
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;
  background-color: #efe9db;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow:
   4px 4px 0 0 rgba(0, 0, 0, 0.9);

}
</style>
