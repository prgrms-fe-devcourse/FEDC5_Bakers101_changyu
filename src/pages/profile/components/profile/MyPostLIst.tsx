import tw, { styled } from 'twin.macro'
import MyPostItem from './MyPostItem'

type PostListProps = {
  posts: Post[] | undefined
  listTitle: string
}

const PostListContainer = styled.div`
  ${tw`mb-10`}
`
const PostListTitle = styled.h1`
  ${tw`text-lg font-bold mb-4`}
`

const MyPostList = ({ posts, listTitle }: PostListProps) => {
  return (
    <PostListContainer>
      <PostListTitle>{listTitle}</PostListTitle>
      <section className="flex flex-col gap-2">
        {posts?.map((post) => (
          <button key={post._id}>
            <MyPostItem post={post} />
          </button>
        ))}
      </section>
    </PostListContainer>
  )
}

export default MyPostList
