import { useEffect, useState } from 'react'

// components
import CommentForm from './CommentForm'
import CommentList from './CommentList'

// apis
import { getPostDetail } from '@/apis/postApis'

type CommentsProps = {
  postUserId: string
  postId: string
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>
}

const Comments = ({ postUserId, postId, setCommentNumber }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([])

  const fetchCommentsData = async (postId: string) => {
    try {
      const response = await getPostDetail(postId)
      setComments(response.comments)
    } catch (error) {
      console.error('댓글을 불러오는 중 오류가 발생했습니다:', error)
    }
  }

  const handleCommentAdded = () => {
    fetchCommentsData(postId)
  }

  useEffect(() => {
    fetchCommentsData(postId)
  }, [postId])

  return (
    <div>
      <CommentForm
        postUserId={postUserId}
        postId={postId}
        onCommentAdded={handleCommentAdded}
        setCommentNumber={setCommentNumber}
      />
      <CommentList
        comments={comments}
        setCommentNumber={setCommentNumber}
      />
    </div>
  )
}

export default Comments
