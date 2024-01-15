import { useState, useEffect } from 'react'
import NotificationItem from './NotificationItem'
import { getNotifications } from '@/apis/notification/notifications'

type NotificationListProps = {
  allRead: boolean
}

const NotificationList = ({ allRead }: NotificationListProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const getNotificationData = async () => {
    try {
      const response = await getNotifications()
      setNotifications(response)
    } catch (error) {
      console.error('알림 목록 조회 실패: ', error)
    }
  }

  useEffect(() => {
    getNotificationData()
  }, [allRead])

  return (
    <div className="flex-grow overflow-auto text-sm">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification._id}
          notification={notification}
        />
      ))}
    </div>
  )
}

export default NotificationList
