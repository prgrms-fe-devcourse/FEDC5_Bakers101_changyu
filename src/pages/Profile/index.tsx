import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import UserProfileImage from './components/profile/UserProfileImage'
import UserProfileInfo from './components/profile/UserProfileInfo'
import Header from './components/Header'
import PostList from './components/profile/PostList'
import getProfile from '@/apis/profile'

const ProfileContainer = styled.main`
  ${tw`w-full h-screen relative`}
`

const UserProfileSection = styled.section`
  ${tw`w-full h-full`}
`

const CoverImage = styled.img`
  ${tw`w-full h-64 object-cover`}
`

const DetailSection = styled.div`
  ${tw`mx-auto w-10/12 flex justify-between items-center relative -mt-16`}
`

const Divider = styled.div`
  ${tw`mx-auto w-10/12 h-[.3px] bg-[#000] my-6`}
`

const PostSection = styled.section`
  ${tw`mx-auto w-10/12 flex flex-col gap-6`}
`

function Profile() {
  const [userInfo, setUserInfo] = useState<User>()
  const isMyProfile = userInfo?._id === import.meta.env.VITE_USER_ID
  const [myInfo, setMyInfo] = useState<User | null>(null)
  const [isFollowed, setIsFollowed] = useState<boolean>(false)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getProfile(import.meta.env.VITE_ADMIN_ID)
      setUserInfo(data)
    }
    fetchUserInfo()

    const fetchMyProfile = async () => {
      const data = await getProfile(import.meta.env.VITE_USER_ID)
      setMyInfo(data)
    }
    fetchMyProfile()
  }, [])

  useEffect(() => {
    const checkIsFollowedUser = () => {
      const res = myInfo?.following.some(
        (item) => item.user === import.meta.env.VITE_ADMIN_ID
      )
      setIsFollowed(res!)
    }
    checkIsFollowedUser()
  }, [myInfo])

  const handleClickFollowButton = () => {
    setIsFollowed((prev) => !prev)
  }

  return (
    <ProfileContainer>
      <Header />
      <UserProfileSection>
        <CoverImage src={`${userInfo?.coverImage}`} />
        <DetailSection>
          <main className="w-full flex flex-col gap-2">
            <UserProfileImage
              imgSrc={userInfo?.image}
              isMyProfile={isMyProfile}
            />
            <UserProfileInfo
              fullName={userInfo?.fullName}
              userName={'User'}
              email={userInfo?.email}
              isOnline={userInfo?.isOnline}
              followers={userInfo?.followers}
              following={userInfo?.following}
              isMyProfile={isMyProfile}
              isFollowed={isFollowed}
              onClickFollowButton={handleClickFollowButton}
            />
          </main>
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
