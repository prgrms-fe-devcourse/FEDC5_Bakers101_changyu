import getProfile from '@/apis/profile'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import PostList from './components/PostList'
import Header from './components/Header'

const ProfileContainer = styled.main`
  ${tw`w-full h-screen relative`}
`

const UserProfileSection = styled.section`
  ${tw`w-full h-full`}
`

const CoverImage = styled.img`
  ${tw`w-full h-64 object-cover`}
`

const UserProfileImage = styled.img`
  ${tw`w-32 h-32 rounded-full object-cover z-10 bg-white`}
`

const DetailSection = styled.div`
  ${tw`mx-auto w-10/12 flex justify-between items-center relative -mt-16`}
`

const Divider = styled.div`
  ${tw`mx-auto w-10/12 h-[.3px] bg-[#000] my-6`}
`

const EditButton = styled.button`
  background: url('src/assets/icons/edit.svg') no-repeat center center;
  ${tw`w-6 h-6 self-end mb-3`}
`

const UserProfileInfoWrapper = styled.div`
  ${tw`flex justify-between gap-3`}
`

const UserProfileInfo = styled.div`
  ${tw`flex flex-col`}
`

const OnlineIndicator = styled.div(({ isOnline }) => [
  tw`w-2 h-2 rounded-full bg-[crimson] self-end mb-1`,
  isOnline && tw`bg-[limegreen]`
])

const UserNameWrapper = styled.div`
  ${tw`flex items-center gap-2`}
`

const ButtonContainer = styled.div`
  ${tw`flex gap-2`}
`

const ChatButton = styled.button`
  background: url('src/assets/icons/chat.svg') no-repeat center center;
  ${tw`w-6 h-6`}
`
const FollowButton = styled.button`
  background: url('src/assets/icons/following.svg') no-repeat center center;
  ${tw`w-6 h-6`}
`

const PostSection = styled.section`
  ${tw`mx-auto w-10/12 flex flex-col gap-6`}
`

function Profile() {
  const [userInfo, setUserInfo] = useState<User | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getProfile()
      setUserInfo(data)
    }
    fetchUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <Header />
      <UserProfileSection>
        <CoverImage src={`${userInfo?.coverImage}`} />
        <DetailSection>
          <aside className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <UserProfileImage src={`${userInfo?.image}`} />
              <EditButton />
            </div>
            <UserProfileInfoWrapper>
              <UserProfileInfo>
                <UserNameWrapper>
                  <p className="font-bold text-2xl">User</p>
                  <p className="text-sm text-[#333] self-end">
                    {userInfo?.fullName}
                  </p>
                  <OnlineIndicator isOnline={userInfo?.isOnline} />
                </UserNameWrapper>
                <p className="text-[#333]">{userInfo?.email}</p>
                <ButtonContainer className="font-semibold mt-3">
                  <button>팔로워 {userInfo?.followers.length}</button>
                  <button>팔로잉 {userInfo?.following.length}</button>
                </ButtonContainer>
              </UserProfileInfo>
              <ButtonContainer className="items-center self-center mb-5">
                <ChatButton />
                <FollowButton />
              </ButtonContainer>
            </UserProfileInfoWrapper>
          </aside>
        </DetailSection>
        <Divider />
        <PostSection>
          <PostList
            posts={userInfo?.posts}
            listTitle="작성한 포스트"
          />
          <PostList
            posts={userInfo?.likes}
            listTitle="좋아요한 포스트"
          />
        </PostSection>
      </UserProfileSection>
    </ProfileContainer>
  )
}

export default Profile
