import tw, { styled } from 'twin.macro'

const FilterContainer = styled.div`
  ${tw`flex items-center gap-3`}
`

const FilterItem = styled.button(({ isSelected }) => [
  tw`rounded-3xl bg-[#eee] text-brand-primary py-2 px-4 font-bold`,
  isSelected && tw`bg-brand-primary text-white`
])

interface FilterProps {
  selectedFilterItem: 'user' | 'all'
  onClickFilter: (type: 'user' | 'all') => void
}

const Filter = ({ selectedFilterItem, onClickFilter }: FilterProps) => {
  return (
    <FilterContainer>
      <FilterItem
        onClick={() => onClickFilter('all')}
        isSelected={selectedFilterItem === 'all'}>
        전체
      </FilterItem>
      <FilterItem
        onClick={() => onClickFilter('user')}
        isSelected={selectedFilterItem === 'user'}>
        사용자
      </FilterItem>
    </FilterContainer>
  )
}

export default Filter
