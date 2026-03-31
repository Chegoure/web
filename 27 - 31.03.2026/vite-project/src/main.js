import { createApp } from 'vue'
import { router } from './router.js'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import App from './App.vue'
import './style.css'


createApp(App).use(ToastPlugin).use(router).mount('#app')
