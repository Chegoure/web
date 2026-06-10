import apiClient from './client'

export default {
  getActiveThread(id) {
    return apiClient.get('/threads/' + id)
  },
  deleteThread(id) {
    return apiClient.delete('/threads/' + id)
  },
  getThreads() {
    return apiClient.get('/threads/')
  },
  createThread(data) {
    return apiClient.post('/threads/', data)
  }
}
