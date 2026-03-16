import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import App from './App.vue'

createApp(App).use(ToastPlugin).mount('#app')
