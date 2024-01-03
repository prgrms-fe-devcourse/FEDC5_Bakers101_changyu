import tw, { styled } from 'twin.macro'

import { useProfileStore } from '@/stores/userProfileStore'

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full`}
`

interface ProfileImageProps {
  children?: React.ReactNode
}

const ProfileImage = ({ children }: ProfileImageProps) => {
  const { profile } = useProfileStore()

  return (
    <ProfileImageWrapper>
      <img
        src={profile?.image}
        alt="profile"
        className="w-32 h-32 rounded-full object-cover z-10 bg-white"
      />
      {children}
    </ProfileImageWrapper>
  )
}

export default ProfileImage
