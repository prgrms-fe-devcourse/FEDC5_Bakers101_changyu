import { useState, useEffect } from 'react'
import { deleteComment } from '@/apis/commnents'
import commentDeleteIcon from '@/assets/icons/commentDelete.svg'

interface CommentProps {
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
  __v: number
}

interface Props {
  comments: CommentProps[]
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}

const CommentList = ({ comments: initialComments }: Props) => {
  const [comments, setComments] = useState(initialComments)

  useEffect(() => {
    setComments(initialComments)
  }, [initialComments])

  const handleCommentDelete = async (commentId: string) => {
    try {
      await deleteComment(commentId)
      setComments(comments.filter((comment) => comment._id !== commentId))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col">
      {comments.length > 0 ? (
        <ul className="w-full my-3">
          {comments.map(({ _id, author, createdAt, comment }) => (
            <li
              key={_id}
              className="mb-4 mx-8">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="font-medium">{author.fullName}</div>
                  <div className="text-sm text-gray-500">
                    {formatDate(createdAt)}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="py-2">{comment}</div>
                  <img
                    className="cursor-pointer"
                    src={commentDeleteIcon}
                    alt="댓글 삭제 아이콘"
                    onClick={() => handleCommentDelete(_id)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>댓글이 없습니다.</div>
      )}
    </div>
  )
}

export default CommentList
