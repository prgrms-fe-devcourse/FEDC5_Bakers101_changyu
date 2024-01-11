import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp } from '@/apis/signup'
import * as Styles from './SignupStyles'
import isPasswordValid from '@/utils/passwordValidator'
import { useProfileStore } from '@/stores/userProfileStore'

const SignUpForm = () => {
  const { setProfile } = useProfileStore()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

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

  const validateName = (input: string): boolean => {
    const isValid = input.length <= 6
    setNameError(isValid ? '' : '이름은 6글자 이내로 입력해주세요.')
    return isValid
  }

  const validateConfirmPassword = (input: string): boolean => {
    const isValid = input === password
    setConfirmPasswordError(
      isValid ? '' : '비밀번호와 확인 비밀번호가 일치하지 않습니다.'
    )
    return isValid
  }

  const handleSignUpSumbit = async () => {
    try {
      const isEmailValid = validateEmail(email)
      const isNameValid = validateName(name)
      const isPasswordValid = validatePassword(password)
      const isConfirmPasswordValid = validateConfirmPassword(confirmPassword)

      if (
        isEmailValid &&
        isNameValid &&
        isPasswordValid &&
        isConfirmPasswordValid
      ) {
        const response = await signUp(email, name, password)
        localStorage.setItem('token', JSON.stringify(response.token))
        setProfile(response.user)
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Styles.Container>
      <Styles.Form>
        <Styles.InputContainer>
          <Styles.Label>Email</Styles.Label>
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
          <Styles.Label>Name</Styles.Label>
          <Styles.Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              validateName(e.target.value)
            }}
          />
          {nameError && <Styles.Error>{nameError}</Styles.Error>}
        </Styles.InputContainer>
        <Styles.InputContainer>
          <Styles.Label>Password</Styles.Label>
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
        <Styles.InputContainer>
          <Styles.Label>Confirm Password</Styles.Label>
          <Styles.Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              validateConfirmPassword(e.target.value)
            }}
          />
          {confirmPasswordError && (
            <Styles.Error>{confirmPasswordError}</Styles.Error>
          )}
        </Styles.InputContainer>
        <Styles.Button onClick={handleSignUpSumbit}>JOIN</Styles.Button>
      </Styles.Form>
    </Styles.Container>
  )
}

export default SignUpForm
