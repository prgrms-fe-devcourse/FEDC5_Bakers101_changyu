import { useEffect, useState } from 'react'
import { useProfileStore } from '@/stores/userProfileStore'
import { useAuthModalStore } from '@/stores/useAuthModalStore'

import { createLike, deleteLike } from '@/apis/likes'
import { createNotification } from '@/apis/notifications'
import getProfile from '@/apis/profile/profile'

import LikedButton from '@/components/likes/LikedButton'
// import UnLikedButton from '@/components/likes/UnLikedButton'

interface Props {
  postUserId: string
  postId: string
  likeNum: number
}

const LikeButton = ({ postUserId, postId, likeNum }: Props) => {
  const [likeCount, setLikeCount] = useState(likeNum)
  const [isLiked, setIsLiked] = useState(false)
  const [likeId, setLikeId] = useState('')
  const { profile, setProfile } = useProfileStore()
  const { openModal } = useAuthModalStore()

  const handleLike = async () => {
    let response = null
    try {
      if (!profile) {
        openModal()
      }
      if (!isLiked) {
        response = await createLike(postId)
        setLikeId(response._id)
        setLikeCount((prevCount) => prevCount + 1)
        setIsLiked(true)

        if (postUserId !== profile?._id) {
          await createNotification('LIKE', response._id, postUserId, postId)
        }
      } else {
        response = await deleteLike(likeId as string)
        setLikeCount((prevCount) => prevCount - 1)
        setIsLiked(false)
      }

      const updatedProfile = await getProfile(response?.user as string)
      setProfile(updatedProfile)
    } catch (error) {
      console.error('좋아요 처리 중 에러 발생:', error)
    }
  }

  useEffect(() => {
    const likes = profile?.likes
    const isLikedItem = likes?.find((like) => like.post === postId)

    if (isLikedItem) {
      setIsLiked(true)
      setLikeId(isLikedItem._id)
    } else {
      setIsLiked(false)
    }
  }, [postId, profile?.likes])

  return (
    <div className="flex items-center gap-1">
      <LikedButton
        fill={isLiked ? '#9F8170' : 'none'}
        className="cursor-pointer w-5 h-5 flex items-center"
        onClick={handleLike}
      />
      <span className="text-[0.9rem] text-[#767676]">{likeCount}</span>
    </div>
  )
}

export default LikeButton
