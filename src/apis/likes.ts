import axiosInstance from './api'
import { LIKE_POST_PATH, UNLIKE_POST_PATH } from '@/utils/api_paths'

export async function createLike(postId: string): Promise<Like> {
  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
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

export async function deleteLike(postId: string): Promise<Like> {
  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  }

  const requestBody = {
    id: postId
  }

  const response = await axiosInstance.post<Like>(
    UNLIKE_POST_PATH,
    requestBody,
    config
  )
  return response.data
}
