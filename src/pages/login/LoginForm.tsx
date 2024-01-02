import { useState } from 'react';
import { login } from '@/apis/login';
import * as Styles from '@/pages/login/LoginStyles';

type Props = {};

function LoginForm({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async () => {
    try {
      const response = await login(email, password);
      localStorage.setItem('token', JSON.stringify(response.token))
    } catch (error) {
      console.log(error);
    }
  };

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
        <Styles.Button>계정이 없으신가요?</Styles.Button>
      </Styles.Form>
    </Styles.Container>
  );
}

export default LoginForm;