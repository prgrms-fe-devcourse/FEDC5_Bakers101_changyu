import tw, { styled } from 'twin.macro'
import CoverImage from './CoverImage'
import ProfileImage from './ProfileImage'
import ProfileNameForm from './ProfileNameForm'
import ProfilePasswordForm from './ProfilePasswordForm'
import UploadImageButton from './UploadImageButton'
import EditIcon from '../EditIcon'
import PrevIcon from '../PrevIcon'
import { useProfileStore } from '@/stores/userProfileStore'

const ProfileDrawerSide = styled.div``

const HeaderContainer = styled.header`
  ${tw`w-full h-16 absolute top-2 left-1 hover:bg-inherit`}
`

const PrevButton = styled.button`
  ${tw`w-10 h-10 drawer-toggle opacity-100`}
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

const DrawerSide = ({ onToggle }: DrawerSideProps) => {
  const { profile } = useProfileStore()
  return (
    <ProfileDrawerSide className="drawer-side">
      <HeaderContainer className="z-10">
        <PrevButton onClick={onToggle}>
          <PrevIcon className="w-full h-full text-[#fff]" />
        </PrevButton>
      </HeaderContainer>
      <Container className="bg-base-200">
        <CoverImage imgSrc={profile?.coverImage}>
          <UploadImageButton
            className="absolute bottom-3 right-2"
            isCover>
            <EditIcon className="w-5 h-5 text-[#fff]" />
          </UploadImageButton>
        </CoverImage>
        <DetailSection>
          <ProfileImage imgSrc={profile?.image}>
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
