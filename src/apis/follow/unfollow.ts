import { UNFOLLOW_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

interface Data {
  [key: string]: string
}

interface FollowResponse extends Following {}

async function unfollow(data: Data): Promise<FollowResponse> {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    const response = await axiosInstance.delete(UNFOLLOW_PATH, {
      headers: {
        Authorization: `Bearer ${parsedToken}`
      },
      data
    })

    return response.data
  } catch (error) {
    throw new Error('Error while unfollowing')
  }
}

export default unfollow
