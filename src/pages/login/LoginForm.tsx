import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/apis/login'
import * as Styles from '@/pages/login/LoginStyles'
import { useProfileStore } from '@/stores/userProfileStore'
import isPasswordValid from '@/utils/passwordValidator'
import { useAuthModalStore } from '@/stores/useAuthModalStore'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loginError, setLoginError] = useState('')

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
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await login(email, password)
        localStorage.setItem('token', JSON.stringify(response.token))
        setProfile(response.user)
        navigate('/')
      } catch (error) {
        setLoginError('이메일 또는 비밀번호가 올바르지 않습니다.')
      }
    }
  }

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleLoginSubmit()
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
              setLoginError('')
            }}
            onKeyDown={handleKeyDown}
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
              setLoginError('')
            }}
            onKeyDown={handleKeyDown}
          />
          {passwordError && <Styles.Error>{passwordError}</Styles.Error>}
        </Styles.InputContainer>

        <Styles.Button onClick={handleLoginSubmit}>Login</Styles.Button>
        <Styles.Button onClick={() => navigate('/sign-up')}>
          계정이 없으신가요?
        </Styles.Button>
      </Styles.Form>
      {loginError && (
        <Styles.LoginErrorContainer>
          <Styles.LoginError>{loginError}</Styles.LoginError>
        </Styles.LoginErrorContainer>
      )}
    </Styles.Container>
  )
}

export default LoginForm
