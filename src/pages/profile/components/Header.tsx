import tw, { styled } from 'twin.macro'
import PrevIcon from './PrevIcon'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = styled.header`
  ${tw`w-full h-16 absolute top-2 left-1 z-10`}
`

const PrevButton = styled.button`
  ${tw`w-10 h-10`}
`

const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <PrevButton onClick={() => navigate(-1)}>
        <PrevIcon className="w-full h-full text-[#fff]" />
      </PrevButton>
    </HeaderContainer>
  )
}

export default Header
