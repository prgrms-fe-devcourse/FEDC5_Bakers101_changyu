import { memo } from 'react'
import formatDate from '@/utils/formatDate'
import ProfileImage from '@/components/profile-images'
import tw from 'twin.macro'

type NotificationItemProps = {
  notification: Notification
}

const Container = tw.div`flex items-center p-2 border-b border-gray-300 w-full flex-1`

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
    <Container>
      <ProfileImage profileImage={author.image} />
      <div className="ml-3 flex-1">
        <div className="flex flex-start text-gray-500 text-left">
          {formatDate(createdAt)}
        </div>
        <div className="text-left">{renderNotificationContent()}</div>
      </div>
    </Container>
  )
})

export default NotificationItem
