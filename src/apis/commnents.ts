import axiosInstance from './api'
import { CREATE_COMMENT_PATH } from '@/utils/api_paths'

export async function createComment(
  comment: string,
  postId: string
): Promise<Comment> {
  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  }

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
