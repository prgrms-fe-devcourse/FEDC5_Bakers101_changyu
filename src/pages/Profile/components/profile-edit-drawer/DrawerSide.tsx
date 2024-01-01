import tw, { styled } from 'twin.macro'
import CoverImage from './CoverImage'
import ProfileImage from './ProfileImage'
import ProfileNameForm from './ProfileNameForm'
import ProfilePasswordForm from './ProfilePasswordForm'

const ProfileDrawerSide = styled.div``

const HeaderContainer = styled.header`
  ${tw`w-full h-16 absolute top-0 left-0 hover:bg-inherit`}
`

const PrevButton = styled.button`
  background: url('src/assets/icons/prev_white.svg') no-repeat center center;
  ${tw`w-12 h-12 drawer-toggle opacity-100`}
`

const Container = styled.div`
  ${tw`w-full min-h-full`}
`

const DetailSection = styled.div`
  ${tw`mx-auto w-10/12 flex flex-col justify-between items-center relative -mt-16`}
`

interface DrawerSideProps {
  onToggle: () => void
}

function DrawerSide({ onToggle }: DrawerSideProps) {
  return (
    <ProfileDrawerSide className="drawer-side">
      <HeaderContainer className="z-10">
        <PrevButton onClick={onToggle} />
      </HeaderContainer>
      <Container className="bg-base-200">
        <CoverImage />
        <DetailSection>
          <ProfileImage />
          <ProfileNameForm />
          <ProfilePasswordForm />
        </DetailSection>
      </Container>
    </ProfileDrawerSide>
  )
}

export default DrawerSide
