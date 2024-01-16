import { axiosInstanceWithToken } from '../api'
import {
  GET_NOTIFICATIONS_PATH,
  CREATE_NOTIFICATIONS_PATH,
  UPDATE_NOTIFICATIONS_PATH
} from '@/apis/api_paths'

export async function getNotifications(): Promise<Notification[]> {
  const response = await axiosInstanceWithToken.get(GET_NOTIFICATIONS_PATH)
  return response.data
}

export async function createNotification(
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE',
  notificationTypeId: string,
  userId: string,
  postId: string | null
): Promise<Notification> {
  const requestBody = {
    notificationType,
    notificationTypeId,
    userId,
    postId
  }

  const response = await axiosInstanceWithToken.post(
    CREATE_NOTIFICATIONS_PATH,
    requestBody
  )
  return response.data
}

export async function updateNotifications(): Promise<void> {
  await axiosInstanceWithToken.put(UPDATE_NOTIFICATIONS_PATH, {})
}
