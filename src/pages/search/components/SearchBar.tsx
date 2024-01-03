import tw, { styled } from 'twin.macro'
import PrevIcon from './PrevIcon'
import SearchIcon from './SearchIcon'

interface SearchBarProps {
  keyword: string
  onClickPrevButton: () => void
  onSearch: (value: string) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, query: string) => void
}

const Container = styled.div`
  ${tw`flex items-center gap-2 mt-20`}
`

const PrevButton = styled.button`
  ${tw`flex justify-center items-center`}
`

const SearchButton = styled.button`
  ${tw`flex justify-end`}
`

const Input = styled.input`
  ${tw`grow border-b outline-none p-2`}
`
const Main = styled.div`
  ${tw`flex items-center gap-2 grow border-b border-brand-primary mr-4`}
`

const SearchBar = ({
  keyword,
  onClickPrevButton,
  onSearch,
  onChange,
  onKeyPress
}: SearchBarProps) => {
  return (
    <Container>
      <PrevButton onClick={onClickPrevButton}>
        <PrevIcon className=" text-brand-primary text-[38px]" />
      </PrevButton>
      <Main>
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={onChange}
          onKeyDown={(e) => onKeyPress(e, keyword)}
        />
        <SearchButton onClick={() => onSearch(keyword)}>
          <SearchIcon className="text-brand-primary text-[25px]" />
        </SearchButton>
      </Main>
    </Container>
  )
}

export default SearchBar
