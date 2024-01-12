import { GET_ALL_USER_LIST_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

interface UserResponse extends User {}

interface AllUserProps {
  offset?: number
  limit?: number
}

// TODO: Params 추가하기
async function getAllUsers({
  offset,
  limit
}: AllUserProps): Promise<UserResponse[]> {
  try {
    const response = await axiosInstance.get(GET_ALL_USER_LIST_PATH)
    return response.data
  } catch (error) {
    throw new Error('Error while getting All Users')
  }
}

export default getAllUsers
