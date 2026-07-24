<script setup>
import { useToast } from 'vue-toast-notification'
import { ref } from 'vue'
import postApi from '@/api/post'

import { useAppStore } from '../store/app.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const $toast = useToast()
const content = ref('')
const { user, activeThreadId } = storeToRefs(useAppStore())

const create = async () => {
  const response = await postApi.createPost(activeThreadId.value, {
    content: content.value,
    author_id: user.value.id,
  })
  console.log(response)
  $toast.success(`Пост создан!`)
  await router.push('/')
}

const back = () => {
  router.back()
}
</script>

<template>
  <div class="container">
    <h1 class="header--title">Форум - Создание нового поста</h1>

    <div class="threads-create">
      <!-- <h2>Создание нового поста</h2> -->

      <div class="threads-create__form">
        <div class="threads-create__form-content">
          <h2>Пост:</h2>
          <textarea
            v-model="content"
            placeholder="Как устроится на работу Frontend разработчиком..."
          ></textarea>
        </div>
        <div class="threads-create__form-actions">
          <button @click="back" class="threads-create__form-btn">Назад</button>
          <button @click="create" class="threads-create__form-btn">
            Готово
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: min(1200px, calc(100% - 24px));
  margin: 0 auto;
}

.header--title {
  padding: 2px;
  margin: 20px 0;

  text-align: center;
  background-color: #f4e9d3;
  border: 5px solid;
  border-radius: 8px;
}

.threads-create {
  min-height: 63vh;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;

  background-color: #f4e9d3;
  border: 5px solid black;
  border-radius: 8px;
}

.threads-create__form-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

h2 {
  padding-bottom: 10px;
  text-align: center;
  margin: 10px 0;
}

.threads-create__form {
  justify-content: center;
  margin: 20px 0;
}

.threads-create__form-content {
  text-align: center;
  margin-top: 36px;
}

.threads-create__form-btn {
  margin-top: 20px;
  padding: 14px;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  background-color: #efe9db;
  font-size: 16px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.threads-create__form-btn:hover {
  transform: translateY(-4px);
  box-shadow: 4px 8px 0 0 rgba(0, 0, 0, 0.9);
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 5px solid;
  background-color: #efe9db;
  transform: translateY(-5px);
  text-align: center;
}

textarea {
  font-size: 16px;
  width: 80%;
  min-height: 200px;
  padding: 10px;
  margin: 0 20px;
  border: 5px solid;
  background-color: #efe9db;
  border-radius: 8px;
}

@media (max-width: 900px) {
  .threads-create {
    height: auto;
    padding: 20px;
  }

  textarea {
    width: 100%;
    margin: 0;
    min-height: 180px;
    box-sizing: border-box;
  }

  .threads-create__form-btn {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 600px) {
  .header--title {
    font-size: 20px;
  }

  h2 {
    font-size: 20px;
  }

  .threads-create__form-btn {
    font-size: 14px;
  }
}
</style>
