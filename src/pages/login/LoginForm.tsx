import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '@/apis/login'
import * as Styles from '@/pages/login/LoginStyles'
import { useProfileStore } from '@/stores/userProfileStore'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { profile, setProfile } = useProfileStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (profile) {
      navigate('/')
    }
  }, [])

  const handleLoginSubmit = async () => {
    try {
      const response = await login(email, password)
      localStorage.setItem('token', JSON.stringify(response.token))
      setProfile(response.user)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Styles.Container>
      <Styles.Form>
        <Styles.Input
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Styles.Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Styles.Button onClick={handleLoginSubmit}>Login</Styles.Button>
        <Styles.Button onClick={() => navigate('/sign-up')}>
          계정이 없으신가요?
        </Styles.Button>
      </Styles.Form>
    </Styles.Container>
  )
}

export default LoginForm
