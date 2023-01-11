import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dois-box-shadow-api-gtwk.vercel.app/',
  // baseURL: 'http://localhost:5000/',
})

export default api