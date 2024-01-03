import tw, { styled } from 'twin.macro'
import FilteredUser from './FilteredUser'
import FilteredPost from './FilteredPost'

interface FilteredListProps {
  type: 'user' | 'all'
  users?: User[]
  posts?: Post[]
}

const Container = styled.div`
  ${tw`flex flex-col gap-3`}
`
const FilteredList = ({ type, users, posts }: FilteredListProps) => {
  return (
    <Container>
      {type === 'user' &&
        users?.map((user) => (
          <FilteredUser
            image={user.image}
            fullName={user.fullName}
            email={user.email}
          />
        ))}
      {type === 'all' && (
        <>
          {users?.map((user) => (
            <FilteredUser
              image={user.image}
              fullName={user.fullName}
              email={user.email}
            />
          ))}
          {posts?.map((post) => (
            <FilteredPost
              thumbnail={post.image}
              title={post.title}
              commentsNum={post.comments.length}
              likesNum={post.likes.length}
            />
          ))}
        </>
      )}
    </Container>
  )
}

export default FilteredList
