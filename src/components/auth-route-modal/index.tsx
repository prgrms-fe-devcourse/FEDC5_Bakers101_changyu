import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20`}
`

const AuthRouteModalContainer = styled.div`
  ${tw`fixed z-10 bg-white border-2 border-slate-300 rounded-md 
       left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
       w-[19rem] py-8`}
`

interface AuthRouteModal {
  closeModal: () => void
}

const AuthRouteModal = ({ closeModal }: AuthRouteModal) => {
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <AuthRouteModalContainer>
        <h2 className="text-center text-lg font-semibold">
          {' '}
          아직 Bakers101 회원이 아니신가요?
        </h2>
        <div className="w-fit text-center mx-auto grid gap-4 my-4">
          <Link
            className="px-4 py-1 rounded-md text-white bg-[#9F8170]"
            to="/"
            onClick={closeModal}>
            로그인
          </Link>
          <Link
            className="px-4 py-1 rounded-md text-white bg-[#9F8170]"
            to="/sign-up"
            onClick={closeModal}>
            회원가입
          </Link>
        </div>
        <div className="mx-auto w-fit ">
          <button onClick={closeModal}>X</button>
        </div>
      </AuthRouteModalContainer>
    </ModalOverlay>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default AuthRouteModal
