import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'

export const useAppStore = defineStore('app', () => {

  const $toast = useToast();
  const user = ref({})

  const init = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  const login = async (name, password) => {
    const response = await axios.post('http://localhost:3000/api/login', {
      username: name,
      password: password
    })
    localStorage.setItem('user', JSON.stringify(response.data.user))
    user.value = response.data.user
    console.log(response)
    console.log(response.data.user.id)
    $toast.success(`Успешный вход, ${ response.data.user.username }!`)
  }

  const register = async (name, password) => {
    const response = await axios.post('http://localhost:3000/api/register', {
      username: name,
      password: password
    })
    localStorage.setItem('user', JSON.stringify(response.data))
    user.value = response.data

    console.log(response)
    $toast.success(`Регистрация завершена, ${ response.data.username }`);
  }

  return { user, login, register, init } // Возвращает объект хранилища.
})
