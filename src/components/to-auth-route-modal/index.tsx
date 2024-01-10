import tw, {styled} from 'twin.macro'
import { Link } from 'react-router-dom'

const AuthRouteModalContainer = styled.div`
  ${tw`fixed`}
`

const AuthRouteModal = () =>{
  
  return (
    <AuthRouteModalContainer>
      <p> 아직 Bakers101 회원이 아니신가요?</p>
      <Link to ='/login'>
        로그인
      </Link>
      <Link to ='/sign-up'>
        회원가입
      </Link>
    </AuthRouteModalContainer>
  )
}

export default AuthRouteModal;