import tw, { styled } from 'twin.macro'

interface UserProfileImageProps {
  imgSrc?: string
  isMyProfile: boolean
}

const UserProfileImageWrapper = styled.div`
  ${tw`w-full flex justify-between`}
`

const ProfileImage = styled.img`
  ${tw`w-32 h-32 rounded-full object-cover z-10 bg-white`}
`

const EditButton = styled.button`
  background: url('src/assets/icons/edit.svg') no-repeat center center;
  ${tw`w-6 h-6 self-end mb-3`}
`

function UserProfileImage({ imgSrc, isMyProfile }: UserProfileImageProps) {
  return (
    <UserProfileImageWrapper>
      <ProfileImage src={imgSrc} />
      {isMyProfile && <EditButton />}
    </UserProfileImageWrapper>
  )
}

export default UserProfileImage
