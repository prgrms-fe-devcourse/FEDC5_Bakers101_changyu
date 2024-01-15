import { axiosInstanceWithToken } from '../api'
import { CREATE_CHANNEL_BY_ADMIN_PATH, AUTH_CHECK } from '@/apis/api_paths'

async function createChannel(channelName: string, description: string) {
  try {
    const adminCheck = await axiosInstanceWithToken.get(AUTH_CHECK)

    if (adminCheck.data.role !== 'SuperAdmin') {
      throw new Error('관리자 권한이 없어서 채널을 만들 수 없습니다.')
    }

    await axiosInstanceWithToken.post(CREATE_CHANNEL_BY_ADMIN_PATH, {
      authRequired: false,
      description,
      name: channelName
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default createChannel
