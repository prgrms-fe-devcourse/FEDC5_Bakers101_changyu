import { useState } from 'react'
import { createComment } from '@/apis/commnents'
import commentUploadIcon from '@/assets/icons/commentUpload.svg'

type Props = {
  postId: string
}

const AddCommentForm = ({ postId }: Props) => {
  const [comment, setComment] = useState('')

  const handleUploadIconClick = async () => {
    try {
      const response = await createComment(comment, postId)
      console.log('response:', response)
      setComment('')
    } catch (error) {
      console.error(error)
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

export default AddCommentForm
