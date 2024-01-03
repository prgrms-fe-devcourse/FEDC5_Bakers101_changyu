import { useEffect, useState } from 'react'

// components
import CommentForm from './CommentForm'
import CommentList from './CommentList'

// apis
import { getPostDetail } from '@/apis/post'

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([])

  // postId에 대한 댓글 데이터를 가져오는 함수 - 임시🔨
  const fetchCommentsData = async (postId: string) => {
    try {
      const response = await getPostDetail(postId)
      setComments(response.comments)
    } catch (error) {
      console.error('댓글을 불러오는 중 오류가 발생했습니다:', error)
    }
  }

  const handleCommentAdded = () => {
    const postId = import.meta.env.VITE_POST_ID
    fetchCommentsData(postId)
  }

  useEffect(() => {
    const postId = import.meta.env.VITE_POST_ID
    fetchCommentsData(postId)
  }, [])

  return (
    <div>
      <CommentForm
        postId={import.meta.env.VITE_POST_ID}
        onCommentAdded={handleCommentAdded}
      />
      <CommentList comments={comments} />
    </div>
  )
}

export default Comments
