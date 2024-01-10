import { useState } from 'react'
import { createLike, deleteLike } from '@/apis/likes'
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

  const handleLike = async () => {
    try {
      if (!isLiked) {
        const response = await createLike(postId)
        setLikeId(response._id)
        setLikeCount((prevCount) => prevCount + 1)
      } else {
        await deleteLike(likeId as string)
        setLikeCount((prevCount) => prevCount - 1)
      }
    } catch (error) {
      console.error('좋아요 처리 중 에러 발생:', error)
    }
    setIsLiked((prevIsLiked) => !prevIsLiked)
  }

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
