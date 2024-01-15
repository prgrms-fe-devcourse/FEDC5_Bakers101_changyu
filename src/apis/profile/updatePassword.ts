import { axiosInstanceWithToken } from '../api'
import { UPDATE_MY_PASSWORD_PATH } from '@/apis/api_paths'

interface Data {
  [key: string]: string
}

interface UpdateResponse extends User {}

async function updatePassword(data: Data): Promise<UpdateResponse> {
  try {
    const response = await axiosInstanceWithToken.put(
      UPDATE_MY_PASSWORD_PATH,
      data
    )
    return response.data
  } catch (error) {
    throw new Error('Error while fetching profile')
  }
}

export default updatePassword
