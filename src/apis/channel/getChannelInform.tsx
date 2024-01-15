import axiosInstance from '../api'

import { GET_CHANNEL_LIST_PATH } from '@/utils/api_paths'

async function getChannelInform(channel: string) {
  try {
    const request = await axiosInstance.get(
      `${GET_CHANNEL_LIST_PATH}/${encodeURIComponent(channel)}`
    )

    return request.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default getChannelInform
