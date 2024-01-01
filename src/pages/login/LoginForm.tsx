import React, { useState } from 'react';
import { login } from '@/apis/login';
import * as styles from './LoginStyles';

type Props = {};

function Login({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSumbit = async () => {
    try {
      const response = await login(email, password);
      console.log('response:', response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <styles.container>
      <styles.form>
        <styles.input
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <styles.input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <styles.button onClick={handleSumbit}>Login</styles.button>
        <styles.button>계정이 없으신가요?</styles.button>
      </styles.form>
    </styles.container>
  );
}

export default Login;