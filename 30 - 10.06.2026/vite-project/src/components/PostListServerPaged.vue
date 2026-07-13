<script setup>
import { ref, watchEffect } from 'vue'
import PaginationPanel from './PaginationPanel.vue'
import { useAppStore } from '../store/app.js'
import { storeToRefs } from 'pinia'
import postApi from '@/api/post'
import { useToast } from 'vue-toast-notification'

const $toast = useToast()

const { activeThreadId } = storeToRefs(useAppStore())

const page = ref(0)
const lastPage = ref(0)
const pagePosts = ref([])

const setPage = (newPage) => {
  page.value = newPage
}

const loadPosts = async () => {
  const response = await postApi.getPostPaginated(
    activeThreadId.value,
    page.value + 1,
  )

  pagePosts.value = response.data.posts
  lastPage.value = response.data.pagination.totalPages - 1
}

const deletePost = async (id) => {
  await postApi.deletePost(id)

  $toast.success('Пост удален!')

  // Если на странице был один пост, предварительно переходим
  // на предыдущую страницу (если она существует)
  if (pagePosts.value.length === 1 && page.value > 0) {
    page.value--
  }

  await loadPosts()
}

watchEffect(() => {
  if (activeThreadId.value) {
    loadPosts()
  }
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
    v-if="pagePosts.length"
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
