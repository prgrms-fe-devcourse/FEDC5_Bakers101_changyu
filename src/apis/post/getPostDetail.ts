import axiosInstance from '../api'
import { GET_DETAIL_POST_PATH } from '@/utils/api_paths'

const getPostDetail = async (postId: string) => {
  try {
    const request = await axiosInstance.get(`${GET_DETAIL_POST_PATH}/${postId}`)
    return request.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default getPostDetail
