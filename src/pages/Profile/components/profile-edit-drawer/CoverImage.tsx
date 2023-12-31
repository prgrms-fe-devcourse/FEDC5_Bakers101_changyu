import tw, { styled } from 'twin.macro'
import EditIcon from '../EditIcon'
import { useProfileStore } from '@/stores/userProfileStore'
import UploadImageButton from './UploadImageButton'

const CoverImageWrapper = styled.div`
  ${tw`relative`}
`

function CoverImage() {
  const { profile } = useProfileStore()

  return (
    <CoverImageWrapper>
      <img
        src={profile?.coverImage}
        alt="profile"
        className="w-full h-64 object-cover p-0 rounded-none brightness-50"
      />
      <UploadImageButton className="absolute bottom-3 right-2" isCover>
      <EditIcon className="w-5 h-5 text-[#fff]" />
      </UploadImageButton>
    </CoverImageWrapper>
  )
}

export default CoverImage
