import { axiosInstance } from '../api'

import { GET_CHANNEL_LIST_PATH } from '@/apis/api_paths'

async function getChannelList() {
  try {
    const request = await axiosInstance.get(GET_CHANNEL_LIST_PATH)
    return request.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default getChannelList
