import tw, {styled} from 'twin.macro'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';


const AuthRouteModalContainer = styled.div`
  ${tw`fixed bg-white`}
`

interface AuthRouteModal {
  closeModal : ()=> void,
}

const AuthRouteModal = ({ closeModal} : AuthRouteModal) =>{
  
  return ReactDOM.createPortal(
    <AuthRouteModalContainer>
      <button onClick ={closeModal}> </button>
      <p> 아직 Bakers101 회원이 아니신가요?</p>
      <Link to ='/login' onClick={closeModal}>
        로그인
      </Link>
      <Link to ='/sign-up' onClick={closeModal}>
        회원가입
      </Link>
    </AuthRouteModalContainer>,
    document.getElementById('modal-root')as HTMLElement
  )
}

export default AuthRouteModal;