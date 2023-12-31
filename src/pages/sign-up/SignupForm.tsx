import React, { useState } from 'react';
import { signUp } from '@/apis/signup';
import * as styles from './SignupStyles';

type Props = {};

function SignUp({}: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(input);
    setEmailError(isValid ? '' : '올바른 이메일 주소를 입력하세요.');
    return isValid;
  };

  const validatePassword = (input: string): boolean => {
    const isValid = input.length >= 6;
    setPasswordError(isValid ? '' : '비밀번호는 최소 6자리 이상이어야 합니다.');
    return isValid;
  };

  const validateName = (input: string): boolean => {
    const isValid = input.length >= 2;
    setNameError(isValid ? '' : '이름은 최소 2글자 이상이어야 합니다.');
    return isValid;
  };

  const validateConfirmPassword = (input: string): boolean => {
    const isValid = input === password;
    setConfirmPasswordError(isValid ? '' : '비밀번호와 확인 비밀번호가 일치하지 않습니다.');
    return isValid;
  };

  const handleSumbit = async () => {
    try {
      const isEmailValid = validateEmail(email);
      const isNameValid = validateName(name);
      const isPasswordValid = validatePassword(password);
      const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

      if (isEmailValid && isNameValid && isPasswordValid && isConfirmPasswordValid) {
        const response = await signUp(email, name, password);
        console.log('response:', response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <styles.container>
      <styles.form>
        <styles.inputContainer>
          <styles.Label>Email</styles.Label>
          <styles.input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {emailError && <styles.error>{emailError}</styles.error>}
        </styles.inputContainer>
        <styles.inputContainer>
          <styles.Label>Name</styles.Label>
          <styles.input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
            }}
          />
          {nameError && <styles.error>{nameError}</styles.error>}
        </styles.inputContainer>
        <styles.inputContainer>
          <styles.Label>Password</styles.Label>
          <styles.input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          {passwordError && <styles.error>{passwordError}</styles.error>}
        </styles.inputContainer>
        <styles.inputContainer>
          <styles.Label>Confirm Password</styles.Label>
          <styles.input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
          />
          {confirmPasswordError && <styles.error>{confirmPasswordError}</styles.error>}
        </styles.inputContainer>
        <styles.button onClick={handleSumbit}>JOIN</styles.button>
      </styles.form>
    </styles.container>
  );
}

export default SignUp;