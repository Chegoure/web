import apiClient from './client'

export default {
  login(name, password) {
    return apiClient.post('/login', {
      username: name,
      password: password,
    })
  },
  register(name, password) {
    return apiClient.post('/register', {
      username: name,
      password: password,
    })
  },
}
