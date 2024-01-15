import { axiosInstanceWithToken } from '../api'
import { LIKE_POST_PATH, UNLIKE_POST_PATH } from '@/apis/api_paths'

export async function createLike(postId: string): Promise<Like> {
  const requestBody = {
    postId
  }

  const response = await axiosInstanceWithToken.post<Like>(
    LIKE_POST_PATH,
    requestBody
  )

  return response.data
}

export async function deleteLike(likeId: string): Promise<Like> {
  const requestBody = {
    id: likeId
  }

  const response = await axiosInstanceWithToken.delete<Like>(UNLIKE_POST_PATH, {
    data: requestBody
  })
  return response.data
}
