import AddCommentForm from './AddCommentForm'
import CommentList from './CommentList'

import data from '@/data/comments.json'

type Props = {}

const Comments = (props: Props) => {
  return (
    <div>
      <AddCommentForm postId={import.meta.env.VITE_POST_ID} />
      <CommentList comments={data} />
    </div>
  )
}

export default Comments
