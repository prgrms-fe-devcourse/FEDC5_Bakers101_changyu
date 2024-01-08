import { FOLLOW_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

interface Data {
  [key: string]: string
}

interface FollowResponse extends Following {}

async function follow(data: Data): Promise<FollowResponse> {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    const response = await axiosInstance.post(FOLLOW_PATH, data, {
      headers: {
        Authorization: `Bearer ${parsedToken}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error('Error while request follow')
  }
}

export default follow
