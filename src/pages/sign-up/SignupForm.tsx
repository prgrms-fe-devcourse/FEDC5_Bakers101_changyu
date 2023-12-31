import React, { useState } from 'react';
import { signUp } from '@/apis/signup';

type Props = {};

function SignUp({}: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input: string): boolean => {
    return input.length >= 6;
  };

  const validateName = (input: string): boolean => {
    return input.length >= 2;
  };

  const handleSumbit = async () => {
    try {
      if (!validateEmail(email)) {
        setError('올바른 이메일 주소를 입력하세요.');
        return;
      }

      if (!validateName(name)) {
        setError('이름은 최소 2글자 이상이어야 합니다.');
        return;
      }

      if (!validatePassword(password)) {
        setError('비밀번호는 최소 6자리 이상이어야 합니다.');
        return;
      }

      if (password !== confirmPassword) {
        setError('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
        return;
      }

      // 유효성 검사 통과 시 회원가입 시도
      const response = await signUp(email, name, password);
      console.log('response:', response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        className="border"
        placeholder="이메일 주소"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
      />
      <input
        type="text"
        className="border"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError('');
        }}
      />
      <input
        type="password"
        className="border"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
      />
      <input
        type="password"
        className="border"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setError('');
        }}
      />
      <button onClick={handleSumbit}>회원가입</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SignUp;