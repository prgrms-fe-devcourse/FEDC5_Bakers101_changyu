import tw, { styled } from 'twin.macro'

const FilterContainer = styled.div`
  ${tw`flex items-center gap-3 mt-6`}
`

const FilterItem = styled.button`
  ${tw`rounded-3xl border border-gray-300 py-1 px-3`}
`

interface FilterProps {
  onClickFilter: (type: 'user' | 'all') => void
}

const Filter = ({ onClickFilter }: FilterProps) => {
  return (
    <FilterContainer>
      <FilterItem onClick={() => onClickFilter('all')}>전체</FilterItem>
      <FilterItem onClick={() => onClickFilter('user')}>사용자</FilterItem>
    </FilterContainer>
  )
}

export default Filter
