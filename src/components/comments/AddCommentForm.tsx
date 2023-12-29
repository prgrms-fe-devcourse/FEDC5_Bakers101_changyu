import React from 'react'
import commentUploadIcon from '@/assets/icons/commentUpload.svg'

type Props = {}

const AddCommentForm = (props: Props) => {
  return (
    <div className="flex items-center space-x-3 m-2 p-2 border-b border-black">
      <input
        className="flex-1 placeholder-brand-primary p-2 outline-none"
        placeholder="댓글을 입력해 주세요."
      />
      <img
        className="cursor-pointer"
        src={commentUploadIcon}
        alt="댓글 업로드 아이콘"
      />
    </div>
  )
}

export default AddCommentForm
