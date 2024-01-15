import axiosInstance from '../api'
import { CREATE_POST_PATH } from '@/apis/api_paths'

async function createPost(formData: FormData) {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    await axiosInstance.post(CREATE_POST_PATH, formData, {
      headers: {
        Authorization: `bearer ${parsedToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default createPost
