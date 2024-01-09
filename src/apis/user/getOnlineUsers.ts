import { GET_ONLINE_USER_LIST_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

interface UserResponse extends User {}

// TODO: Params 추가하기
async function getOnlineUsers(): Promise<UserResponse[]> {
  try {
    const response = await axiosInstance.get(GET_ONLINE_USER_LIST_PATH)
    return response.data
  } catch (error) {
    throw new Error('Error while getting Online Users')
  }
}

export default getOnlineUsers
