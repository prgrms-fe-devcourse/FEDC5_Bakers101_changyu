import axiosInstance from './api'
import { GET_DETAIL_POST_PATH } from '@/utils/api_paths'

export async function getPostDetail(postId: string): Promise<Post> {
  const response = await axiosInstance.get(`${GET_DETAIL_POST_PATH}/${postId}`)
  return response.data
}
