import { axiosInstance } from '../api'
import { GET_POST_LIST_BY_CHANNEL_PATH } from '@/apis/api_paths'

async function getPostList(channelId: string) {
  try {
    const request = await axiosInstance.get(
      `${GET_POST_LIST_BY_CHANNEL_PATH}/${channelId}`
    )
    if (!request) return
    request.data.sort(
      (a: Post, b: Post) => Number(b.createdAt) - Number(a.createdAt)
    )
    return request.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default getPostList
