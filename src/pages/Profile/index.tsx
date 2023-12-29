import getProfile from '@/apis/profile'
import { useEffect, useState } from 'react'

function Profile() {
  const [userInfo, setUserInfo] = useState<User | null>(null)
  
  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getProfile()
      setUserInfo(data)
    }
    fetchUserInfo()
  }, [])
  return <></>
}

export default Profile
