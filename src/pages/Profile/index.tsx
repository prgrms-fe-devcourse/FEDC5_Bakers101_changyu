import getProfile from '@/apis/profile'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

const ProfileContainer = styled.main`
  ${tw`w-full h-screen relative`}
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

  return <ProfileContainer></ProfileContainer>
}

export default Profile
