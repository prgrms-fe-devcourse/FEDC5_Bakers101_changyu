import { memo } from 'react'
import formatDate from '@/utils/formatDate'
import NoProfileThumbnailIcon from '@/pages/search/components/NoProfileThumbnailIcon'

type NotificationItemProps = {
  notification: Notification
}

const NotificationItem = memo(({ notification }: NotificationItemProps) => {
  const { seen, author, post, follow, like, createdAt } = notification

  const renderNotificationContent = () => {
    const { fullName } = author

    if (follow) {
      return `@${fullName}님이 회원님을 팔로우합니다.`
    }

    if (post) {
      return like
        ? `@${fullName}님이 회원님의 글에 좋아요를 달았습니다.`
        : `@${fullName}님이 회원님의 글에 댓글을 남겼습니다.`
    }
  }

  if (seen) return null

  return (
    <div className="flex items-center p-2 border-b border-gray-300">
      <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
        {author.image ? (
          <img
            src={author.image}
            alt="프로필 이미지"
          />
        ) : (
          <NoProfileThumbnailIcon className="w-full h-full rounded-full text-[#ddd] bg-[#fff]" />
        )}
      </div>
      <div>
        <div className="text-gray-500">{formatDate(createdAt)}</div>
        <div>{renderNotificationContent()}</div>
      </div>
    </div>
  )
})

export default NotificationItem
