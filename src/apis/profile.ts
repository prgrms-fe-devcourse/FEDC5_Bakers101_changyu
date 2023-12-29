import { GET_USER_PROFILE_PATH } from '@/utils/api_paths'
import axiosInstance from './api'

interface ProfileResponse extends User {}

async function getProfile(): Promise<ProfileResponse> {
  try {
    const response = await axiosInstance.get(
      `${GET_USER_PROFILE_PATH}/${import.meta.env.VITE_USER_ID}`
    )

    return response.data
  } catch (error) {
    throw new Error('Error while fetching profile')
  }
}

export default getProfile
