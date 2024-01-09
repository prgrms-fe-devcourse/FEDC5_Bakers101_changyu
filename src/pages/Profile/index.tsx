import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import UserProfileInfo from './components/profile/UserProfileInfo'
import Header from './components/Header'
import PostList from './components/profile/PostList'
import Drawer from './components/profile-edit-drawer/Drawer'
import EditIcon from './components/EditIcon'
import getProfile from '@/apis/profile/profile'
import ProfileImage from './components/ProfileImage'
import CoverImage from './components/CoverImage'
import follow from '@/apis/follow/follow'
import unfollow from '@/apis/follow/unfollow'
import { useProfileStore } from '@/stores/userProfileStore'

const ProfileContainer = styled.main`
  ${tw`w-full h-screen relative`}
`

const UserProfileSection = styled.section`
  ${tw`w-full h-full`}
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

const EditButton = styled.button`
  ${tw`w-5 h-5 self-end mb-3`}
`

const DrawerControlLabel = styled.label``

const Profile = () => {
  const { id } = useParams()
  const { profile, setProfile } = useProfileStore()
  const [currentProfile, setCurrentProfile] = useState<User>()
  const [isFollowed, setIsFollowed] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isMyProfile = id === profile?._id

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const fetchProfile = useCallback(async () => {
    const data = await getProfile(id as string)
    if (id === profile?._id) {
      setProfile(data)
    }
    setCurrentProfile(data)
  }, [id, profile?._id, setProfile])

  useEffect(() => {
    fetchProfile()
  }, [isOpen, fetchProfile])

  useEffect(() => {
    const checkIsFollowedUser = () => {
      const res = profile?.following.some((item) => item.user === id)
      setIsFollowed(res!)
    }
    checkIsFollowedUser()
  }, [profile?.following, id])

  const handleClickFollowButton = async () => {
    let data = null

    if (!isFollowed) {
      data = await follow({ userId: id as string })
    } else {
      const filteredFollowing = profile?.following.find(
        (item) => item.user === id
      )
      data = await unfollow({ id: filteredFollowing?._id as string }) // 팔로우 모델에서 _id필드를 id로 넣어야 함
    }

    const updatedProfile = await getProfile(data.follower)
    setProfile(updatedProfile)

    setIsFollowed((prev) => !prev)
  }

  return (
    <Drawer
      isOpen={isOpen}
      onToggle={handleToggleDrawer}>
      <ProfileContainer>
        <Header />
        <UserProfileSection>
          <CoverImage imgSrc={currentProfile?.coverImage ?? undefined} />
          <DetailSection>
            <main className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between">
                <ProfileImage imgSrc={currentProfile?.image ?? undefined} />
                {isMyProfile && (
                  <DrawerControlLabel
                    htmlFor="my-drawer"
                    className="h-fit self-end">
                    <EditButton
                      id="my-drawer"
                      onClick={handleToggleDrawer}>
                      <EditIcon className="w-full h-full" />
                    </EditButton>
                  </DrawerControlLabel>
                )}
              </div>
              <UserProfileInfo
                fullName={currentProfile?.fullName}
                userName={currentProfile?.username || 'User'}
                email={currentProfile?.email}
                isOnline={currentProfile?.isOnline}
                followers={currentProfile?.followers}
                following={currentProfile?.following}
                isMyProfile={isMyProfile}
                isFollowed={isFollowed}
                onClickFollowButton={handleClickFollowButton}
              />
            </main>
          </DetailSection>
          <Divider />
          <PostSection>
            <PostList
              posts={currentProfile?.posts}
              listTitle="작성한 포스트"
            />
            <PostList
              posts={currentProfile?.likes}
              listTitle="좋아요한 포스트"
            />
          </PostSection>
        </UserProfileSection>
      </ProfileContainer>
    </Drawer>
  )
}

export default Profile
