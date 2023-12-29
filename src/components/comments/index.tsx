import AddCommentForm from './AddCommentForm'

type Props = {}

const Comments = (props: Props) => {
  return (
    <div>
      <AddCommentForm postId={import.meta.env.VITE_POST_ID} />
    </div>
  )
}

export default Comments
