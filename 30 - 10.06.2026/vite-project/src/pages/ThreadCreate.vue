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
  const response = await threadApi.createThread({
    title: title.value,
    content: title.value,
    author_id: user.value.id,
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
      <div class="threads-create__form">
        <div class="threads-create__form-inputs">
          <h2>Тема:</h2>
          <input
            v-model="title"
            class="threads-create__form__thread-input"
            placeholder="Вакансии frontend"
            type="text"
          />
        </div>

        <!-- Обертка для кнопок, чтобы центрировать их и задать зазор -->
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
  margin: 20px 0;
}

.threads-create__form-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
}

.threads-create__form-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.threads-create__form-btn {
  padding: 14px;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  background-color: #efe9db;
  font-size: 16px;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.threads-create__form-btn:hover {
  transform: translateY(-4px);
}

.threads-create__form__thread-input {
  width: 500px;
}

input {
  font-size: 20px;
  padding: 10px;
  border-radius: 8px;
  border: 5px solid;
  background-color: #efe9db;
  text-align: center;
}
</style>
