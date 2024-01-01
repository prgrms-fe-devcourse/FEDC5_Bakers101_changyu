import tw, { styled } from 'twin.macro'
import CoverImage from './CoverImage'
import ProfileImage from './ProfileImage'
import ProfileNameForm from './ProfileNameForm'
import ProfilePasswordForm from './ProfilePasswordForm'
import UploadImageButton from './UploadImageButton'
import EditIcon from '../EditIcon'

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
        <CoverImage>
          <UploadImageButton
            className="absolute bottom-3 right-2"
            isCover>
            <EditIcon className="w-5 h-5 text-[#fff]" />
          </UploadImageButton>
        </CoverImage>
        <DetailSection>
          <ProfileImage>
            <UploadImageButton
              className="absolute -bottom-12 w-full h-20 flex justify-center bg-[#000]/30 rounded-b-full"
              isCover={false}>
              <EditIcon className="w-5 h-5 mt-1 text-[#fff]" />
            </UploadImageButton>
          </ProfileImage>
          <ProfileNameForm />
          <ProfilePasswordForm />
        </DetailSection>
      </Container>
    </ProfileDrawerSide>
  )
}

export default DrawerSide
