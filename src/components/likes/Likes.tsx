import { useEffect, useState } from 'react'
import { useProfileStore } from '@/stores/userProfileStore'

import { createLike, deleteLike } from '@/apis/likes'
import getProfile from '@/apis/profile/profile'

import LikedButton from '@/components/likes/LikedButton'
import UnLikedButton from '@/components/likes/UnLikedButton'
interface Props {
  postId: string
  likeNum: number
}

const LikeButton = ({ postId, likeNum }: Props) => {
  const [likeCount, setLikeCount] = useState(likeNum)
  const [isLiked, setIsLiked] = useState(false)
  const [likeId, setLikeId] = useState('')
  const { profile, setProfile } = useProfileStore()

  const handleLike = async () => {
    let response = null
    try {
      if (!isLiked) {
        response = await createLike(postId)
        setLikeId(response._id)
        setLikeCount((prevCount) => prevCount + 1)
      } else {
        response = await deleteLike(likeId as string)
        setLikeCount((prevCount) => prevCount - 1)
      }
    } catch (error) {
      console.error('좋아요 처리 중 에러 발생:', error)
    }
    setIsLiked((prevIsLiked) => !prevIsLiked)

    const updatedProfile = await getProfile(response?.user as string)
    setProfile(updatedProfile)
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
      {isLiked ? (
        <LikedButton
          className="cursor-pointer border-none w-5 h-5 flex items-center"
          onClick={handleLike}
        />
      ) : (
        <UnLikedButton
          className="cursor-pointer w-5 h-5 flex items-center"
          onClick={handleLike}
        />
      )}
      <span className="text-[0.9rem] text-[#767676]">{likeCount}</span>
    </div>
  )
}

export default LikeButton
