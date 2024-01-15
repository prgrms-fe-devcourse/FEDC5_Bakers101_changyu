import axiosInstance from '../api'
import { UPDATE_POST_PATH } from '@/apis/api_paths'

async function updatePost(formData: FormData) {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    await axiosInstance.put(UPDATE_POST_PATH, formData, {
      headers: {
        Authorization: `bearer ${parsedToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default updatePost
