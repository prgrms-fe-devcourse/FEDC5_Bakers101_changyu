import tw, { styled } from 'twin.macro'
import PrevIcon from './PrevIcon'
import SearchIcon from './SearchIcon'

interface SearchBarProps {
  keyword: string
  error: string
  onClickPrevButton: () => void
  onSearch: (value: string) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPressEnter: (
    query: string,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void
}

const Container = styled.div`
  ${tw`flex gap-2 mt-20`}
`

const Wrapper = styled.div`
  ${tw`flex items-center gap-2 grow border-b border-brand-primary mr-4`}
`

const PrevButton = styled.button`
  ${tw`flex justify-center items-center h-fit`}
`

const SearchButton = styled.button`
  ${tw`flex justify-end`}
`

const Input = styled.input`
  ${tw`grow border-b outline-none p-2`}
`
const Main = styled.div`
  ${tw`flex flex-col grow`}
`

const SearchBar = ({
  keyword,
  error,
  onClickPrevButton,
  onSearch,
  onChange,
  onPressEnter
}: SearchBarProps) => {
  return (
    <Container>
      <PrevButton onClick={onClickPrevButton}>
        <PrevIcon className="text-brand-primary text-[38px]" />
      </PrevButton>
      <Main>
        <Wrapper>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={onChange}
            onKeyDown={(e) => onPressEnter(keyword, e)}
          />
          <SearchButton onClick={() => onSearch(keyword)}>
            <SearchIcon className="text-brand-primary text-[25px]" />
          </SearchButton>
        </Wrapper>
        {error && <p className='text-[crimson] text-xs mt-2'>{error}</p>}
      </Main>
    </Container>
  )
}

export default SearchBar
