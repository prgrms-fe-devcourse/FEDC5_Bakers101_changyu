import tw, { styled } from 'twin.macro'
import EditIcon from '../EditIcon'
import { useProfileStore } from '@/stores/userProfileStore'
import UploadImageButton from './UploadImageButton'

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full`}
`

function ProfileImage() {
  const { profile } = useProfileStore()
  
  return (
    <ProfileImageWrapper>
      <img
        src={profile?.image}
        alt="profile"
        className="w-32 h-32 rounded-full object-cover z-10 bg-white"
      />
      <UploadImageButton
        className="absolute -bottom-12 w-full h-20 flex justify-center bg-[#000]/30 rounded-b-full"
        isCover={false}>
        <EditIcon className="w-5 h-5 mt-1 text-[#fff]" />
      </UploadImageButton>
    </ProfileImageWrapper>
  )
}

export default ProfileImage
