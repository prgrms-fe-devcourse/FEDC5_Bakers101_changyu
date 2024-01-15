import axiosInstance from '../api'
import { DELETE_POST_PATH } from '@/apis/api_paths'

async function deletePost(id: string) {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    await axiosInstance.delete(DELETE_POST_PATH, {
      headers: { Authorization: `bearer ${parsedToken}` },
      data: { id: id }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default deletePost
