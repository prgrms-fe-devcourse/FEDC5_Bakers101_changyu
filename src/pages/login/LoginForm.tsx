import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/apis/login'
import * as Styles from '@/pages/login/LoginStyles'
import { useProfileStore } from '@/stores/userProfileStore'
import isPasswordValid from '@/utils/passwordValidator'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const isValid = emailRegex.test(input)
    setEmailError(isValid ? '' : '올바른 이메일 주소를 입력하세요.')
    return isValid
  }

  const validatePassword = (input: string): boolean => {
    const isValid = isPasswordValid(input)
    setPasswordError(
      isValid ? '' : '최소 8자리 이상, 영문 대소문자 + 숫자, 특수문자 포함'
    )
    return isValid
  }

  const { setProfile } = useProfileStore()
  const navigate = useNavigate()

  const handleLoginSubmit = async () => {
    try {
      const isEmailValid = validateEmail(email)
      const isPasswordValid = validatePassword(password)

      if (isEmailValid && isPasswordValid) {
        const response = await login(email, password)
        localStorage.setItem('token', JSON.stringify(response.token))
        setProfile(response.user)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Styles.Container>
      <Styles.Form>
        <Styles.InputContainer>
          <Styles.Input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }}
          />
          {emailError && <Styles.Error>{emailError}</Styles.Error>}
        </Styles.InputContainer>
        <Styles.InputContainer>
          <Styles.Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              validatePassword(e.target.value)
            }}
          />
          {passwordError && <Styles.Error>{passwordError}</Styles.Error>}
        </Styles.InputContainer>
        <Styles.Button onClick={handleLoginSubmit}>Login</Styles.Button>
        <Styles.Button onClick={() => navigate('/sign-up')}>
          계정이 없으신가요?
        </Styles.Button>
      </Styles.Form>
    </Styles.Container>
  )
}

export default LoginForm
