import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/Index.vue'
import LoginView from './pages/Login.vue'
import RegisterView from './pages/Register.vue'
import ForumView from './pages/Forum.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/forum', component: ForumView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})