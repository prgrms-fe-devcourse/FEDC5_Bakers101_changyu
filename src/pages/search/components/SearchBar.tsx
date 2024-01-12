import tw, { styled } from 'twin.macro'
import PrevIcon from './PrevIcon'
import SearchIcon from './SearchIcon'
import ResetIcon from './ResetIcon'

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
  onReset: () => void
}

const Container = styled.div`
  ${tw`flex gap-2 mt-6`}
`

const Wrapper = styled.div`
  ${tw`flex items-center gap-2 grow bg-[#eee]`}
`

const PrevButton = styled.button`
  ${tw`flex justify-center items-center`}
`

const SearchButton = styled.button`
  ${tw`flex justify-end`}
`

const Input = styled.input`
  ${tw`grow border-b outline-none p-2 pl-4 bg-[#eee] text-sm`}
`

const Main = styled.div`
  ${tw`flex flex-col grow rounded-3xl overflow-hidden`}
`

const ResetButton = styled.button`
  ${tw`flex justify-center items-center h-fit`}
`

const SearchBar = ({
  keyword,
  error,
  onClickPrevButton,
  onSearch,
  onChange,
  onPressEnter,
  onReset
}: SearchBarProps) => {
  // const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <PrevButton onClick={onClickPrevButton}>
        <PrevIcon className="text-brand-primary text-[35px]" />
      </PrevButton>
      <Main>
        <Wrapper>
          <Input
            // ref={inputRef}
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={onChange}
            onKeyDown={(e) => onPressEnter(keyword, e)}
          />
          <ResetButton onClick={onReset}>
            <ResetIcon className="text-[#9e9e9e] text-[12px]" />
          </ResetButton>
          <SearchButton onClick={() => onSearch(keyword)}>
            <SearchIcon className="text-[#9e9e9e] text-[20px] mr-4" />
          </SearchButton>
        </Wrapper>
        {error && <p className="text-[crimson] text-xs mt-2">{error}</p>}
      </Main>
    </Container>
  )
}

export default SearchBar
