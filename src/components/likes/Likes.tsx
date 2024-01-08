import { useState } from 'react'
import { createLike, deleteLike } from '@/apis/likes'
import LikedButton from '@/components/likes/LikedButton'
import UnLikedButton from '@/components/likes/UnLikedButton'

export interface LikeProps {
  _id: string
  user: string // 사용자 id
  post: string // 포스트 id
  createdAt: string
  updatedAt: string
}
interface Props {
  likes: LikeProps[]
}

const LikeButton = ({ likes }: Props) => {
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    try {
      if (!isLiked) {
        // 좋아요 누르기
        await createLike(postId)
        setLikeCount((prevCount) => prevCount + 1)
        setIsLiked(true)
      } else {
        // 좋아요 취소하기
        await deleteLike(_id)
        setLikeCount((prevCount) => prevCount - 1)
        setIsLiked(false)
      }
    } catch (error) {
      console.error('좋아요 처리 중 에러 발생:', error)
    }
    setIsLiked((prevIsLiked) => !prevIsLiked)
  }

  return (
    <div className="flex items-center">
      {isLiked ? (
        <LikedButton
          className="cursor-pointer border-none flex items-center fill-#9F8170"
          onClick={handleLike}
        />
      ) : (
        <UnLikedButton
          className="cursor-pointer border-none flex items-center fill-#9F8170"
          onClick={handleLike}
        />
      )}
      <span>{likeCount}</span>
    </div>
  )
}

export default LikeButton
