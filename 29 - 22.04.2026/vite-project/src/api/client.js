import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Замените на URL вашего сервера
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Здесь можно добавить перехватчики (interceptors) для токенов
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default apiClient;
