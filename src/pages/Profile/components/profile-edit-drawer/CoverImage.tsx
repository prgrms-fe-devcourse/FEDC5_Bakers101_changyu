import tw, { styled } from 'twin.macro'

import { useProfileStore } from '@/stores/userProfileStore'

const CoverImageWrapper = styled.div`
  ${tw`relative`}
`

interface CoverImageProps {
  children?: React.ReactNode
}

function CoverImage({ children }: CoverImageProps) {
  const { profile } = useProfileStore()

  return (
    <CoverImageWrapper>
      <img
        src={profile?.coverImage}
        alt="profile"
        className="w-full h-64 object-cover p-0 rounded-none brightness-50"
      />
      {children}
    </CoverImageWrapper>
  )
}

export default CoverImage
