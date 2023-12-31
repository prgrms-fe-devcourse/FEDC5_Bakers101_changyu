import tw, { styled } from 'twin.macro'
import ButtonContainer from './ButtonContainer'
import FollowButton from './FollowButton'

interface UserProfileInfoProps {
  fullName?: string
  userName?: string
  email?: string
  isOnline?: boolean
  followers?: Follow[]
  following?: Following[]
  isMyProfile: boolean
  isFollowed: boolean
  onClickFollowButton: () => void
}

const UserProfileInfoWrapper = styled.div`
  ${tw`flex justify-between gap-3`}
`

const ProfileInfo = styled.div`
  ${tw`flex flex-col`}
`

const UserNameWrapper = styled.div`
  ${tw`flex items-center gap-2`}
`

const OnlineIndicator = styled.div(({ isOnline }) => [
  tw`w-2 h-2 rounded-full bg-[crimson] self-end mb-1`,
  isOnline && tw`bg-[limegreen]`
])

const ChatButton = styled.button`
  background: url('src/assets/icons/chat.svg') no-repeat center center;
  ${tw`w-6 h-6`}
`

function UserProfileInfo({
  fullName,
  userName,
  email,
  isOnline,
  followers,
  following,
  isMyProfile,
  isFollowed,
  onClickFollowButton
}: UserProfileInfoProps) {
  return (
    <UserProfileInfoWrapper>
      <ProfileInfo>
        <UserNameWrapper>
          <p className="font-bold text-2xl">{userName || 'User'}</p>
          <p className="text-sm text-[#333] self-end">{fullName}</p>
          <OnlineIndicator isOnline={isOnline} />
        </UserNameWrapper>
        <p className="text-[#333]">{email}</p>
        <ButtonContainer className="font-semibold mt-3">
          <button>팔로워 {followers && followers.length}</button>
          <button>팔로잉 {following && following.length}</button>
        </ButtonContainer>
      </ProfileInfo>
      <ButtonContainer className="items-center self-center mb-5">
        <ChatButton />
        {!isMyProfile && isFollowed && (
          <FollowButton
            fill="#FF777F"
            className="w-5 h-5"
            onClick={onClickFollowButton}
          />
        )}
        {!isMyProfile && !isFollowed && (
          <FollowButton onClick={onClickFollowButton} />
        )}
      </ButtonContainer>
    </UserProfileInfoWrapper>
  )
}

export default UserProfileInfo
