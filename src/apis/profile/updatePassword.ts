import { UPDATE_MY_PASSWORD_PATH } from '@/utils/api_paths'
import axiosInstance from './api'

interface Data {
  [key: string]: string
}

interface UpdateResponse extends User {}

async function updatePassword(data: Data): Promise<UpdateResponse> {
  try {
    const response = await axiosInstance.put(UPDATE_MY_PASSWORD_PATH, data, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error('Error while fetching profile')
  }
}

export default updatePassword
