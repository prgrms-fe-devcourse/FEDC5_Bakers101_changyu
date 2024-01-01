import React, { useState } from 'react';
import { login } from '@/apis/login';
import * as styles from '@/pages/login/LoginStyles';

type Props = {};

function LoginForm({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async () => {
    try {
      const response = await login(email, password);
      console.log('response:', response);
    } catch (error) {
      console.log(error);
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
        <styles.button onClick={handleLoginSubmit}>Login</styles.button>
        <styles.button>계정이 없으신가요?</styles.button>
      </styles.form>
    </styles.container>
  );
}

export default LoginForm;