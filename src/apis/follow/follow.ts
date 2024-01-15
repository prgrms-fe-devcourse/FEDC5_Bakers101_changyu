import { axiosInstanceWithToken } from '../api'
import { FOLLOW_PATH } from '@/apis/api_paths'

interface Data {
  [key: string]: string
}

interface FollowResponse extends Following {}

async function follow(data: Data): Promise<FollowResponse> {
  try {
    const response = await axiosInstanceWithToken.post(FOLLOW_PATH, data)
    return response.data
  } catch (error) {
    throw new Error('Error while request follow')
  }
}

export default follow
