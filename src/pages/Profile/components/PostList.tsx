import tw, { styled } from 'twin.macro'

type PostListProps = {
  posts: Post[] | Like[] | undefined
  listTitle: string
}

const PostListContainer = styled.div`
  ${tw`h-96`}
`
const PostListTitle = styled.h1`
  ${tw`text-lg font-bold mb-4`}
`

function PostList({ posts, listTitle }: PostListProps) {
  return (
    <PostListContainer>
      <PostListTitle>{listTitle}</PostListTitle>
      {posts && posts.length > 0 ? '' : 'No posts'}
    </PostListContainer>
  )
}

export default PostList
