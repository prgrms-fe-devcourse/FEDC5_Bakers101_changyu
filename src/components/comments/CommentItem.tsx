import { CommentProps } from '@/components/comments/CommentList'
import commentDeleteIcon from '@/assets/icons/commentDelete.svg'
import formatDate from '@/utils/formatDate'

interface Props {
  comment: CommentProps
  onDelete: (commentId: string) => void
}

const CommentItem = ({ comment, onDelete }: Props) => {
  const { _id, author, createdAt, comment: commentText } = comment

  return (
    <li className="mb-4 mx-8">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="font-medium">{author.fullName}</div>
          <div className="text-sm text-gray-500">{formatDate(createdAt)}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="py-2">{commentText}</div>
          <img
            className="cursor-pointer"
            src={commentDeleteIcon}
            alt="댓글 삭제 아이콘"
            onClick={() => onDelete(_id)}
          />
        </div>
      </div>
    </li>
  )
}

export default CommentItem
