import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { useAuthModalStore } from '@/stores/useAuthModalStore'
import { useProfileStore } from '@/stores/userProfileStore'

import UserProfileInfo from './components/profile/UserProfileInfo'
import Header from './components/Header'
import Drawer from './components/profile-edit-drawer/Drawer'
import EditIcon from './components/EditIcon'
import ProfileImage from './components/ProfileImage'
import CoverImage from './components/CoverImage'
import LikedPostList from './components/profile/LikedPostList'
import MyPostList from './components/profile/MyPostList'

import getProfile from '@/apis/profile/profile'
import unfollow from '@/apis/follow/unfollow'
import follow from '@/apis/follow/follow'
import logout from '@/apis/logout'
import { createNotification } from '@/apis/notifications'
import { getPostDetail } from '@/apis/postApis'

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
  ${tw`w-5 h-5 self-end flex items-center justify-center`}
`

const DrawerControlLabel = styled.label``

const LogoutButton = styled.button`
  ${tw`text-[10px] underline underline-offset-2 text-[#747474] self-end`}
`

const Profile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { profile, setProfile } = useProfileStore()
  const [currentProfile, setCurrentProfile] = useState<User>()
  const [isFollowed, setIsFollowed] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { openModal } = useAuthModalStore()
  const isMyProfile = id === profile?._id
  const [followerCount, setFollowerCount] = useState<number>(0)
  const [followingCount, setFollowingCount] = useState<number>(0)
  const [likedPosts, setLikedPosts] = useState<Post[]>([])

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const fetchProfile = useCallback(async () => {
    const data = await getProfile(id as string)
    if (id === profile?._id) {
      setProfile(data)
    }
    setCurrentProfile(data)
    setFollowerCount(data.followers.length)
    setFollowingCount(data.following.length)
  }, [id, profile?._id, setProfile])

  const fetchLikedPosts = useCallback(async () => {
    const likedPostsId = profile?.likes.map((item) => item.post)
    likedPostsId?.forEach(async (postId) => {
      const data = await getPostDetail(postId)
      setLikedPosts((prev) => [...prev, data])
    })
  }, [profile?.likes])

  const handleClickFollowButton = async () => {
    let data = null
    if (!profile) {
      openModal()
      return
    }
    if (!isFollowed) {
      data = await follow({ userId: id as string })
      setFollowerCount((prev) => prev + 1)
      if (profile) {
        await createNotification('FOLLOW', data._id, data.user, null)
      }
    } else {
      const filteredFollowing = profile?.following.find(
        (item) => item.user === id
      )
      data = await unfollow({ id: filteredFollowing?._id as string })
      fetchProfile()
      setFollowerCount((prev) => prev - 1)
    }

    const updatedProfile = await getProfile(data.follower)
    setProfile(updatedProfile)
    setIsFollowed((prev) => !prev)
  }

  const handleLogout = async () => {
    await logout()
    setProfile(null)
    localStorage.removeItem('token')
    navigate('/home')
  }

  useEffect(() => {
    fetchProfile()
  }, [isOpen, fetchProfile])

  useEffect(() => {
    fetchLikedPosts()
  }, [])

  useEffect(() => {
    const checkIsFollowedUser = () => {
      const res = profile?.following.some((item) => item.user === id)
      setIsFollowed(res!)
    }
    checkIsFollowedUser()
  }, [profile?.following, id])

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
                    <div className="flex items-center gap-2 justify-center mb-3">
                      <LogoutButton onClick={handleLogout}>
                        로그아웃
                      </LogoutButton>
                      <EditButton
                        id="my-drawer"
                        onClick={handleToggleDrawer}
                        className="">
                        <EditIcon className="w-full h-full" />
                      </EditButton>
                    </div>
                  </DrawerControlLabel>
                )}
              </div>
              <UserProfileInfo
                fullName={currentProfile?.fullName}
                userName={currentProfile?.username || 'User'}
                email={currentProfile?.email}
                isOnline={currentProfile?.isOnline}
                followers={followerCount}
                following={followingCount}
                isMyProfile={isMyProfile}
                isFollowed={isFollowed}
                onClickFollowButton={handleClickFollowButton}
              />
            </main>
          </DetailSection>
          <Divider />
          <PostSection>
            <MyPostList
              posts={currentProfile?.posts}
              listTitle="작성한 포스트"
            />
            <LikedPostList
              posts={likedPosts}
              listTitle="좋아요한 포스트"
            />
          </PostSection>
        </UserProfileSection>
      </ProfileContainer>
    </Drawer>
  )
}

export default Profile
