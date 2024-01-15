import { useState, useEffect } from 'react'
import CommentItem from '@/components/comments/CommentItem'
import { deleteComment } from '@/apis/post/commnents'

export interface CommentProps {
  _id: string
  comment: string
  author: {
    isOnline: boolean
    posts: Post[]
    likes: Like[]
    comments: string[]
    _id: string
    fullName: string
    email: string
  }
  post: string
  createdAt: string
  updatedAt: string
}

interface CommentListProps {
  comments: CommentProps[]
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>
}

const CommentList = ({
  comments: initialComments,
  setCommentNumber
}: CommentListProps) => {
  const [comments, setComments] = useState(initialComments)

  useEffect(() => {
    setComments(initialComments)
  }, [initialComments])

  const handleCommentDelete = async (commentId: string) => {
    try {
      await deleteComment(commentId)
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      )
      setCommentNumber((prev) => prev - 1)
    } catch (error) {
      console.error('댓글 삭제 중 오류가 발생했습니다:', error)
    }
  }

  return (
    <div className="flex flex-col">
      {comments.length > 0 ? (
        <ul className="w-full my-3">
          {comments.map((comment) => (
            <button key={comment._id}>
              <CommentItem
                comment={comment}
                onDelete={handleCommentDelete}
              />
            </button>
          ))}
        </ul>
      ) : (
        <div className="flex flex-grow items-center justify-center">
          댓글이 없습니다.
        </div>
      )}
    </div>
  )
}

export default CommentList
