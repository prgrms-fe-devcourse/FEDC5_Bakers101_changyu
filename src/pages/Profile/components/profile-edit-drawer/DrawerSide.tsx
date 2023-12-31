import tw, { styled } from 'twin.macro'
import ProfileInput from './ProfileInput'
import CoverImage from './CoverImage'
import ProfileImage from './ProfileImage'

const ProfileDrawerSide = styled.div``

const HeaderContainer = styled.header`
  ${tw`w-full h-16 absolute top-0 left-0 hover:bg-inherit`}
`

const PrevButton = styled.button`
  background: url('src/assets/icons/prev_white.svg') no-repeat center center;
  ${tw`w-12 h-12 drawer-toggle opacity-100`}
`

const Container = styled.div`
  ${tw`w-full min-h-full`}
`

const DetailSection = styled.div`
  ${tw`mx-auto w-10/12 flex flex-col justify-between items-center relative -mt-16`}
`

const InputWrapper = styled.div`
  ${tw`w-full mb-36 flex flex-col gap-3`}
`

const ConfirmButton = styled.div`
  padding: 10px 20px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`

function DrawerSide() {
  return (
    <ProfileDrawerSide className="drawer-side">
      <HeaderContainer className="z-10">
        <PrevButton onClick={() => {}} />
      </HeaderContainer>
      <Container className="bg-base-200">
        <CoverImage />
        <DetailSection>
          <ProfileImage />
          <InputWrapper>
            <ProfileInput
              labelName="사용자 명"
              value="Username"
              placeholder="사용자 명을 입력해주세요."
              type="text"
              onChangeInput={() => {}}
            />
            <ProfileInput
              labelName="실명"
              value="FullName"
              placeholder="실명을 입력해주세요."
              type="text"
              onChangeInput={() => {}}
            />
            <ProfileInput
              labelName="비밀번호"
              value="Password"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChangeInput={() => {}}
            />
          </InputWrapper>
          <ConfirmButton>수정하기</ConfirmButton>
        </DetailSection>
      </Container>
    </ProfileDrawerSide>
  )
}

export default DrawerSide
