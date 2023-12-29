import getProfile from '@/apis/profile'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

const ProfileContainer = styled.main`
  ${tw`w-full h-screen relative`}
`

const Header = styled.header`
  ${tw`w-full h-16 absolute top-0 left-0`}
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
      <Header>
        <button>
          <img
            src="src/assets/icons/prev_white.svg"
            alt="goback"
          />
        </button>
      </Header>
      <UserProfileSection>
        <CoverImage src={`${userInfo?.coverImage}`} />
        <DetailSection>
          <aside className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <UserProfileImage src={`${userInfo?.image}`} />
              <EditButton />
            </div>
          </aside>
        </DetailSection>
        <Divider />
      </UserProfileSection>
    </ProfileContainer>
  )
}

export default Profile
