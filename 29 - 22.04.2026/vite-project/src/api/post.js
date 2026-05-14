import apiClient from './client'

export default {
  deletePost(id) {
    return apiClient.delete('/posts/' + id)
  },
  createPost(activeThreadId, data) {
    return apiClient.post(`/threads/${activeThreadId}/posts`, data)
  },
  getPostPaginated(activeThreadId, page) {
    return apiClient.get(`/threads/${activeThreadId}/posts?page=${page}&limit=3`)
  },
}
