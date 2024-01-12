import axiosInstance from './api'
import { LIKE_POST_PATH, UNLIKE_POST_PATH } from '@/utils/api_paths'

export async function createLike(postId: string): Promise<Like> {
  const token = localStorage.getItem('token')
  const parsedToken = JSON.parse(token as string)
  const config = {
    headers: { Authorization: `bearer ${parsedToken}` }
  }

  const requestBody = {
    postId
  }

  const response = await axiosInstance.post<Like>(
    LIKE_POST_PATH,
    requestBody,
    config
  )

  return response.data
}

export async function deleteLike(likeId: string): Promise<Like> {
  const token = localStorage.getItem('token')
  const parsedToken = JSON.parse(token as string)
  const config = {
    headers: { Authorization: `bearer ${parsedToken}` }
  }

  const requestBody = {
    id: likeId
  }

  const response = await axiosInstance.delete<Like>(UNLIKE_POST_PATH, {
    data: requestBody,
    ...config
  })
  return response.data
}
