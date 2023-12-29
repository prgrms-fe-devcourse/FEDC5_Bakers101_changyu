import getProfile from '@/apis/profile'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

const ProfileContainer = styled.main`
  ${tw`w-full h-screen relative`}
`

const Header = styled.header`
  ${tw`w-full h-16 absolute top-0 left-0`}
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
    </ProfileContainer>
  )
}

export default Profile
