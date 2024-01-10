import axiosInstance from './api'
import { CREATE_COMMENT_PATH, DELETE_COMMENT_PATH } from '@/utils/api_paths'

const config = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  }
}

export async function createComment(
  comment: string,
  postId: string
): Promise<Comment> {
  const requestBody = {
    comment,
    postId
  }

  const response = await axiosInstance.post<Comment>(
    CREATE_COMMENT_PATH,
    requestBody,
    config
  )
  return response.data
}

export async function deleteComment(id: string): Promise<Comment> {
  const requestBody = {
    id
  }

  const response = await axiosInstance.delete<Comment>(DELETE_COMMENT_PATH, {
    data: requestBody,
    ...config
  })
  return response.data
}
