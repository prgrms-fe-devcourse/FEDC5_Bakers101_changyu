import { axiosInstance } from '../api'
import { GET_USER_PROFILE_PATH } from '@/apis/api_paths'

interface ProfileResponse extends User {}

async function getProfile(id: string): Promise<ProfileResponse> {
  try {
    const response = await axiosInstance.get(`${GET_USER_PROFILE_PATH}/${id}`)

    return response.data
  } catch (error) {
    throw new Error('Error while fetching profile')
  }
}

export default getProfile
