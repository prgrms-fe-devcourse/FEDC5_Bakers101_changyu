import { useState } from 'react'

import { useProfileStore } from '@/stores/userProfileStore'

import { createComment } from '@/apis/commnents'
import { createNotification } from '@/apis/notifications'
import commentUploadIcon from '@/assets/icons/commentUpload.svg'

type CommentFormProps = {
  postUserId: string
  postId: string
  onCommentAdded: () => void
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>
}

const CommentForm = ({
  postUserId,
  postId,
  onCommentAdded,
  setCommentNumber
}: CommentFormProps) => {
  const { profile } = useProfileStore()

  const [comment, setComment] = useState('')

  const handleUploadIconClick = async () => {
    try {
      const response = await createComment(comment, postId)
      setComment('')
      setCommentNumber((prev) => prev + 1)

      if (postUserId !== profile?._id) {
        await createNotification('COMMENT', response._id, postUserId, postId)
      }

      if (onCommentAdded) {
        onCommentAdded()
      }
    } catch (error) {
      console.error('댓글 추가 중 오류가 발생했습니다:', error)
    }
  }

  return (
    <div className="flex items-center space-x-3 m-2 p-2 border-b border-black">
      <input
        className="flex-1 placeholder-brand-primary p-2 outline-none bg-transparent"
        placeholder="댓글을 입력해 주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <img
        className="cursor-pointer"
        src={commentUploadIcon}
        alt="댓글 업로드 아이콘"
        onClick={handleUploadIconClick}
      />
    </div>
  )
}

export default CommentForm
