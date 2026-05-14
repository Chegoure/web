<script setup>

import { useToast } from 'vue-toast-notification'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '../store/app.js'
import { useRouter } from 'vue-router'
import threadApi from '@/api/thread'

const router = useRouter()
const { user } = storeToRefs(useAppStore())
const $toast = useToast()

const title = ref('')
const content = ref('')

const create = async () => {
  const response = await threadApi.createThread( {
    title: title.value,
    content: content.value,
    author_id: user.value.id
  })
  console.log(response)

  $toast.success(`Тема ${response.data.title}, создана!`)
  await router.push('/')
}

const back = () => {
  router.back()
}
</script>

<template>
  <div class="container">
    <h1 class="header--title">Форум - Создание новой темы</h1>

    <div class="threads-create">
      <!-- <h2>Создание новой темы</h2> -->

      <div class="threads-create__form">
        <div class="threads-create__form-inputs">

          <h2>Тема</h2>
          <input
            v-model="title"
            class="threads-create__form__thread-input"
            placeholder="Как какать?"
            type="text"
          />
        </div>

        <div class="threads-create__form-content">
          <h2>Содержание</h2>
          <textarea
            v-model="content"
            placeholder="Меня часто спрашивают: Как какать?..."
          ></textarea>
        </div>

        <button @click="back" class="threads-create__form-btn">Назад</button>
        <button @click="create" class="threads-create__form-btn">Готово</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1200px;
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
  height: 30vw; /* Пока что!!! */
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;

  background-color: #f4e9d3;
  border: 5px solid black;
  border-radius: 8px;
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

.threads-create__form-inputs {
  display: flex;
  justify-content: center;
  margin-top: 36px;
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
}

.threads-create__form__thread-input {
  margin: 0 20px;
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
  width: 80%;
  min-height: 200px;
  padding: 10px;
  margin: 0 20px;
  border: 5px solid;
  background-color: #efe9db;
  border-radius: 8px;
}
</style>
