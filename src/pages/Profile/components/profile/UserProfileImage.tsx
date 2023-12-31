import tw, { styled } from 'twin.macro'

interface UserProfileImageProps {
  imgSrc?: string
  isMyProfile: boolean
}

const UserProfileImageWrapper = styled.div``

const ProfileImage = styled.img`
  ${tw`w-32 h-32 rounded-full object-cover z-10 bg-white`}
`

function UserProfileImage({ imgSrc }: UserProfileImageProps) {
  return (
    <UserProfileImageWrapper>
      <ProfileImage src={imgSrc} />
    </UserProfileImageWrapper>
  )
}

export default UserProfileImage
