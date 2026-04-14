import { createApp } from 'vue'
import { router } from './router.js'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import App from './App.vue'
import './style.css'

const pinia = createPinia()

createApp(App)
  .use(ToastPlugin)
  .use(router)
  .use(pinia)
  .mount('#app')

