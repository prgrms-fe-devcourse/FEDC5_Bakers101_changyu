import axiosInstance from './api'
import { CREATE_COMMENT_PATH, DELETE_COMMENT_PATH } from '@/utils/api_paths'

const config = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  }
}

interface Author {
  _id: string
}

interface Comment {
  _id: string
  comment: string
  author: Author
  post: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface CommentResponse {
  data: Comment
}

export async function createComment(
  comment: string,
  postId: string
): Promise<CommentResponse> {
  const requestBody = {
    comment,
    postId
  }

  const response = await axiosInstance.post<CommentResponse>(
    CREATE_COMMENT_PATH,
    requestBody,
    config
  )
  return response.data
}

export async function deleteComment(id: string): Promise<CommentResponse> {
  const requestBody = {
    id
  }

  const response = await axiosInstance.delete<CommentResponse>(
    DELETE_COMMENT_PATH,
    { data: requestBody, ...config }
  )
  return response.data
}
