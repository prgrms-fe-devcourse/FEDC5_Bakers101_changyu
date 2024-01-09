import { memo } from 'react'
import formatDate from '@/utils/formatDate'

type NotificationItemProps = {
  notification: Notification
}

const NotificationItem = memo(({ notification }: NotificationItemProps) => {
  const { seen, author, post, follow, createdAt } = notification

  // TODO: 각 데이터들이 어떻게 들어올지 정확한 파악 후 조건문 수정 예정🔨
  const renderNotificationContent = () => {
    if (post) {
      return `@${author.fullName}님이 회원님의 글에 댓글을 남겼습니다.`
    } else if (follow) {
      return `@${author.fullName}님이 회원님을 팔로우합니다.`
    } else {
      return `@${author.fullName}님이 회원님의 글에 좋아요를 달았습니다.`
    }
  }

  if (seen) return null

  return (
    <div className="flex items-center p-2 border-b border-gray-300">
      <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
        <img
          src={author.image}
          alt={`${author.fullName}의 프로필`}
          className="w-full h-auto"
        />
      </div>
      <div>
        <div className="text-gray-500">{formatDate(createdAt)}</div>
        <div>{renderNotificationContent()}</div>
      </div>
    </div>
  )
})

export default NotificationItem
