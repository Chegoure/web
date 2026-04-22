<script setup>
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import PaginationPanel from './PaginationPanel.vue'
import axios from 'axios'
import { useAppStore } from '../store/app.js'
import { storeToRefs } from 'pinia'

const { activeThreadId } = storeToRefs(useAppStore())

const emit = defineEmits(['deletePost'])

const page = ref(0)
const perPage = ref(3)
const lastPage = ref(0)
const pagePosts = ref([])

const setPage = async (newPage) => {
  page.value = newPage
}

const deletePost = (id) => {
  emit('deletePost', id)
}

watchEffect(async () => {
  const response = await axios.get(`http://localhost:3000/api/threads/${activeThreadId.value}/posts?page=${page.value}&limit=3`)
  console.log(response)
  pagePosts.value = response.data.posts
  lastPage.value = response.data.pagination.totalPages
})

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

  <PaginationPanel
    :page="page"
    :lastPage="lastPage"
    @setPage="setPage"
  />
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
}

.post-delete {
  font-weight: bold;
  margin-left: 5px;
  max-height: 25px;
}
</style>
