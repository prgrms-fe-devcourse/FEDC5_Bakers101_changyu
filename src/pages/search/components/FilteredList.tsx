import tw, { styled } from 'twin.macro'
import FilteredUser from './FilteredUser'
import FilteredPost from './FilteredPost'
import NoResult from './NoResult'

interface FilteredListProps {
  type: 'user' | 'all'
  users?: User[]
  posts?: Post[]
  isSearched?: boolean
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

const FilteredList = ({
  type,
  users,
  posts,
  isSearched
}: FilteredListProps) => {
  return (
    <Container>
      {type === 'user' &&
        users?.map(({ _id, image, fullName, email }) => (
          <FilteredUser
            id={_id}
            image={image}
            fullName={fullName}
            email={email}
          />
        ))}
      {type === 'all' && (
        <>
          <HorizontalSlide>
            {users?.map(({ _id, image, fullName, email }) => (
              <FilteredUser
                id={_id}
                image={image}
                fullName={fullName}
                email={email}
                isHidden
              />
            ))}
          </HorizontalSlide>
          {users!.length > 0 ||
            (posts!.length > 0 && (
              <GridPostSection>
                {posts?.map(({ image, title, comments, likes }) => (
                  <FilteredPost
                    thumbnail={image}
                    title={title}
                    commentsNum={comments.length}
                    likesNum={likes.length}
                  />
                ))}
              </GridPostSection>
            ))}
        </>
      )}
      {isSearched && users!.length === 0 && posts!.length === 0 && <NoResult />}
    </Container>
  )
}

export default FilteredList
