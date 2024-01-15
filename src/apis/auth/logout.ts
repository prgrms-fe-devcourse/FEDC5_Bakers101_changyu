import { LOGOUT_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

async function logout() {
  try {
    const response = await axiosInstance.post(LOGOUT_PATH)

    return response.data
  } catch (error) {
    throw new Error('Error while logging out')
  }
}

export default logout
