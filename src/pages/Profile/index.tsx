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
  const [myProfile, setMyInfo] = useState<User | null>(null)
  const [isMyProfile, setIsMyProfile] = useState<boolean>(false)
  const [isFollowed, setIsFollowed] = useState<boolean>(false)

  useEffect(() => {
    const fetchMyProfile = async () => {
      const data = await getProfile(import.meta.env.VITE_USER_ID)
      setMyInfo(data)
      setIsMyProfile(data?._id === import.meta.env.VITE_USER_ID)
    }
    fetchMyProfile()
  }, [])

  /* 로직만 참고해주세요. */
  useEffect(() => {
    const checkIsFollowedUser = () => {
      const res = myProfile?.following.some(
        (item) => item.user === import.meta.env.VITE_ADMIN_ID
      )
      setIsFollowed(res!)
    }
    checkIsFollowedUser()
  }, [myProfile])

  const handleClickFollowButton = () => {
    setIsFollowed((prev) => !prev)
  }

  return (
    <ProfileContainer>
      <Header />
      <UserProfileSection>
        <CoverImage src={`${myProfile?.coverImage}`} />
        <DetailSection>
          <main className="w-full flex flex-col gap-2">
            <UserProfileImage
              imgSrc={myProfile?.image}
              isMyProfile={isMyProfile}
            />
            <UserProfileInfo
              fullName={myProfile?.fullName}
              userName={'User'}
              email={myProfile?.email}
              isOnline={myProfile?.isOnline}
              followers={myProfile?.followers}
              following={myProfile?.following}
              isMyProfile={isMyProfile}
              isFollowed={isFollowed}
              onClickFollowButton={handleClickFollowButton}
            />
          </main>
        </DetailSection>
        <Divider />
        <PostSection>
          <PostList
            posts={myProfile?.posts}
            listTitle="작성한 포스트"
          />
          <PostList
            posts={myProfile?.likes}
            listTitle="좋아요한 포스트"
          />
        </PostSection>
      </UserProfileSection>
    </ProfileContainer>
  )
}

export default Profile
