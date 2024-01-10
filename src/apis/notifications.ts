import axiosInstance from './api'
import {
  GET_NOTIFICATIONS_PATH,
  CREATE_NOTIFICATIONS_PATH,
  UPDATE_NOTIFICATIONS_PATH
} from '@/utils/api_paths'

const config = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  }
}

export async function getNotifications(): Promise<Notification[]> {
  const response = await axiosInstance.get(GET_NOTIFICATIONS_PATH, config)
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

  const response = await axiosInstance.post(
    CREATE_NOTIFICATIONS_PATH,
    requestBody,
    config
  )
  return response.data
}

export async function updateNotifications(): Promise<void> {
  await axiosInstance.put(UPDATE_NOTIFICATIONS_PATH, {}, config)
}
