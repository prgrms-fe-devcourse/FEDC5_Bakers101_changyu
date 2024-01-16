import { axiosInstanceWithToken } from '../api'
import { CREATE_COMMENT_PATH, DELETE_COMMENT_PATH } from '@/apis/api_paths'

export async function createComment(
  comment: string,
  postId: string
): Promise<Comment> {
  const requestBody = {
    comment,
    postId
  }

  const response = await axiosInstanceWithToken.post<Comment>(
    CREATE_COMMENT_PATH,
    requestBody
  )
  return response.data
}

export async function deleteComment(id: string): Promise<Comment> {
  const requestBody = {
    id
  }

  const response = await axiosInstanceWithToken.delete<Comment>(
    DELETE_COMMENT_PATH,
    {
      data: requestBody
    }
  )
  return response.data
}
