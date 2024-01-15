import axiosInstance from '../api'

import { CREATE_CHANNEL_BY_ADMIN_PATH, AUTH_CHECK } from '@/utils/api_paths'

async function createChannel(channelName: string, description: string) {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    const adminCheck = await axiosInstance.get(AUTH_CHECK, {
      headers: { Authorization: `bearer ${parsedToken}` }
    })

    if (adminCheck.data.role !== 'SuperAdmin')
      throw new Error('관리자권한이 없어서 채널 못 만듬')

    await axiosInstance.post(
      CREATE_CHANNEL_BY_ADMIN_PATH,
      {
        authRequired: false,
        description: `${description}`,
        name: `${channelName}`
      },
      { headers: { Authorization: `bearer ${parsedToken}` } }
    )
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default createChannel
