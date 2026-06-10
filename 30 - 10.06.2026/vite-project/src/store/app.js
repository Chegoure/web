import { defineStore } from 'pinia'
import { ref } from 'vue'
import authApi from '@/api/auth.js'
import { useToast } from 'vue-toast-notification'

export const useAppStore = defineStore('app', () => {

  const $toast = useToast();
  const user = ref({})
  const activeThreadId = ref(0)

  const init = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  const login = async (name, password) => {
    const response = await authApi.login(name, password)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    user.value = response.data.user
    console.log(response)
    console.log(response.data.user.id)
    $toast.success(`Успешный вход, ${ response.data.user.username }!`)
  }

  const register = async (name, password) => {
    const response = await authApi.register(name, password)
    localStorage.setItem('user', JSON.stringify(response.data))
    user.value = response.data

    console.log(response)
    $toast.success(`Регистрация завершена, ${ response.data.username }`);
  }

  return { user, activeThreadId, login, register, init } // Возвращает объект хранилища.
})
