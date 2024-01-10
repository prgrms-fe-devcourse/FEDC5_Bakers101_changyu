import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}:${import.meta.env.VITE_APP_PORT}`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance
