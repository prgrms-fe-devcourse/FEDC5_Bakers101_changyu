import tw, { styled } from 'twin.macro'

const LoginNoticeModal = styled.div` sticky`

const LoginNoticeModal = () => {
  return (
    <LoginNoticeModal>
      <button>로그인</button>
      <button>회원가입</button>
    </LoginNoticeModal>
  )
}

export default LoginNoticeModal
