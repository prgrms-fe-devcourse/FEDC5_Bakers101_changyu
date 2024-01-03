import tw, { styled } from 'twin.macro'
import FilteredUser from './FilteredUser'

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
    </Container>
  )
}

export default FilteredList
