import { createWebHistory, createRouter } from 'vue-router'

import LoginView from './pages/Login.vue'
import RegisterView from './pages/Register.vue'
import ForumView from './pages/Forum.vue'
import ThreadCreateView from './pages/ThreadCreate.vue'
import PostCreateView from './pages/PostCreate.vue'


const routes = [
  { path: '/', component: ForumView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/thread-create', component: ThreadCreateView },
  { path: '/post-create', component: PostCreateView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})