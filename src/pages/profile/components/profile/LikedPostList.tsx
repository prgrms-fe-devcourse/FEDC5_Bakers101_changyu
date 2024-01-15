import tw, { styled } from 'twin.macro'
import PostItem from '@/pages/home/components/post/PostItem'

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

const LikedPostList = ({ posts, listTitle }: PostListProps) => {
  return (
    <PostListContainer>
      <PostListTitle>{listTitle}</PostListTitle>
      <section className="flex flex-col gap-2">
        {posts?.map((post, index) => (
          <button key={post._id}>
            <PostItem
              postDetail={post}
              index={index}
            />
          </button>
        ))}
      </section>
    </PostListContainer>
  )
}

export default LikedPostList