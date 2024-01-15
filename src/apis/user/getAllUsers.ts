import { axiosInstance } from '../api'
import { GET_ALL_USER_LIST_PATH } from '@/apis/api_paths'

interface UserResponse extends User {}

async function getAllUsers(): Promise<UserResponse[]> {
  try {
    const response = await axiosInstance.get(GET_ALL_USER_LIST_PATH)
    return response.data
  } catch (error) {
    throw new Error('Error while getting All Users')
  }
}

export default getAllUsers
