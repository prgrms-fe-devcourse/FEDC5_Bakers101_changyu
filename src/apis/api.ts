import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}:${import.meta.env.VITE_APP_PORT}`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

const axiosInstanceWithToken = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}:${import.meta.env.VITE_APP_PORT}`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    config.headers['Authorization'] = `Bearer ${parsedToken}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axiosInstance, axiosInstanceWithToken }
