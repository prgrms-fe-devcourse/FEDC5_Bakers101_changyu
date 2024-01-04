import tw, { styled } from 'twin.macro'

const HeaderContainer = styled.header`
  ${tw`w-full h-16 absolute top-0 left-0`}
`

const PrevButton = styled.button`
  background: url('src/assets/icons/prev_white.svg') no-repeat center center;
  ${tw`w-12 h-12`}
`

const Header = () => {
  return (
    <HeaderContainer>
      <PrevButton />
    </HeaderContainer>
  )
}

export default Header
