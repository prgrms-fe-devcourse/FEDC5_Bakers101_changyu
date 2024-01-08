import { UPDATE_MY_PASSWORD_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

interface Data {
  [key: string]: string
}

interface UpdateResponse extends User {}

async function updatePassword(data: Data): Promise<UpdateResponse> {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    const response = await axiosInstance.put(UPDATE_MY_PASSWORD_PATH, data, {
      headers: {
        Authorization: `Bearer ${parsedToken}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error('Error while fetching profile')
  }
}

export default updatePassword
