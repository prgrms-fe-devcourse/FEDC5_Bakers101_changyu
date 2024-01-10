import tw, { styled } from 'twin.macro'
import ButtonContainer from './ButtonContainer'
import FollowButton from './FollowButton'
import ChatIcon from './ChatIcon'

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

interface OnlineIndicatorProps {
  isOnline?: boolean
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

const OnlineIndicator = styled.div<OnlineIndicatorProps>(({ isOnline }) => [
  tw`w-2 h-2 rounded-full bg-[crimson] self-end mb-1`,
  isOnline && tw`bg-[limegreen]`
])

const ChatButton = styled.button`
  ${tw`w-5 h-5`}
`

const UserProfileInfo = ({
  fullName,
  userName,
  email,
  isOnline,
  followers,
  following,
  isMyProfile,
  isFollowed,
  onClickFollowButton
}: UserProfileInfoProps) => {
  return (
    <UserProfileInfoWrapper>
      <ProfileInfo>
        <UserNameWrapper>
          <p className="font-bold text-2xl">{fullName}</p>
          <p className="text-sm text-[#333] self-end">{userName || 'User'}</p>
          <OnlineIndicator isOnline={isOnline} />
        </UserNameWrapper>
        <p className="text-[#333]">{email}</p>
        <ButtonContainer className="font-semibold mt-3">
          <button>팔로워 {followers && followers.length}</button>
          <button>팔로잉 {following && following.length}</button>
        </ButtonContainer>
      </ProfileInfo>
      <ButtonContainer className="items-center self-center mb-5">
        <ChatButton>
          <ChatIcon className="w-full h-full" />
        </ChatButton>
        {!isMyProfile && (
          <FollowButton
            isFilled={isFollowed}
            onClick={onClickFollowButton}
          />
        )}
      </ButtonContainer>
    </UserProfileInfoWrapper>
  )
}

export default UserProfileInfo
