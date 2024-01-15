import { axiosInstanceWithToken } from '../api'
import { UNFOLLOW_PATH } from '@/apis/api_paths'

interface Data {
  [key: string]: string
}

interface UnFollowResponse extends Following {}

async function unfollow(data: Data): Promise<UnFollowResponse> {
  try {
    const response = await axiosInstanceWithToken.delete(UNFOLLOW_PATH, {
      data
    })
    return response.data
  } catch (error) {
    throw new Error('Error while unfollowing')
  }
}

export default unfollow
