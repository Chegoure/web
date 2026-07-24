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
  } else {
    page.value = 1
    lastPage.value = 0
    pagePosts.value = []
  }
})
</script>

<template>
  <div class="posts-container">
    <ul class="posts-list">
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
  </div>
</template>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
}

.posts-list {
  flex: 1;
}

.post {
  display: flex;
  padding: 10px;
  margin-bottom: 14px;
  background-color: #efe9db;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  height: 126px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  word-break: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 17px;
}
.post:hover {
  transform: translateY(-4px);
  box-shadow: 4px 8px 0 0 rgba(0, 0, 0, 0.9);
}

.post-delete {
  font-weight: bold;
  margin-left: 5px;
  max-height: 25px;

  cursor: pointer;
  flex-shrink: 0;
  padding-left: 10px;
}

.post-wrapper {
  flex: 1;
}

/* @media (max-width: 768px) {
  .post {
    padding: 8px;
    min-height: auto;
    align-items: flex-start;
  }

  .post-wrapper {
    flex: 1;
    font-size: 12px;
    line-height: 1.5;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .post-delete {
    margin-left: 10px;
    font-size: 14px;
    flex-shrink: 0;
  }
} */

@media (max-width: 600px) {
  .post {
    padding: 6px;
    height: 100px;
  }

  .post-wrapper {
    font-size: 15px;
    line-height: 1.4;
  }

  .post-delete {
    font-size: 12px;
    padding-left: 6px;
  }
}
</style>
