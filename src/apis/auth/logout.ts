import { axiosInstance } from '../api'
import { LOGOUT_PATH } from '@/apis/api_paths'

async function logout() {
  try {
    const response = await axiosInstance.post(LOGOUT_PATH)

    return response.data
  } catch (error) {
    throw new Error('Error while logging out')
  }
}

export default logout
