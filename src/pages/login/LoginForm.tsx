import React, {useState} from 'react';
import { login } from '@/apis/login'

type Props = {};

function Login({}: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSumbit = async () => {
        try {
          const response = await login(email, password)
          console.log('response:', response)
        } catch (error) {
          console.error(error)
        }
      }
    
      return (
        <div>
          <input
            type="email"
            className="border"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSumbit}>Login</button>
        </div>
      )
    }
    
export default Login;