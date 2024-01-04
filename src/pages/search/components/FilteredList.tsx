import tw, { styled } from 'twin.macro'
import FilteredUser from './FilteredUser'
import FilteredPost from './FilteredPost'
import NoResult from './NoResult'

interface FilteredListProps {
  type: 'user' | 'all'
  users?: User[]
  posts?: Post[]
}

const Container = styled.div`
  ${tw`flex flex-col gap-3 grow`}
`

const HorizontalSlide = styled.div`
  ${tw`pb-3 flex items-center gap-3 overflow-x-scroll`}
`

const GridPostSection = styled.div`
  ${tw`grid grid-cols-2 gap-2`}
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
          <HorizontalSlide>
            {users?.map((user) => (
              <FilteredUser
                image={user.image}
                fullName={user.fullName}
                email={user.email}
                isHidden
              />
            ))}
          </HorizontalSlide>
          {users!.length === 0 && posts!.length === 0 && <NoResult />}
          {users!.length > 0 ||
            (posts!.length > 0 && (
              <GridPostSection>
                {posts?.map((post) => (
                  <FilteredPost
                    thumbnail={post.image}
                    title={post.title}
                    commentsNum={post.comments.length}
                    likesNum={post.likes.length}
                  />
                ))}
              </GridPostSection>
            ))}
        </>
      )}
    </Container>
  )
}

export default FilteredList
