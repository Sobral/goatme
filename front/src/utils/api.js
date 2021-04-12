import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE || 'http://localhost:3000/api/v1/',
  timeout: 180000 /* 3 minutes */,
})

export default api
