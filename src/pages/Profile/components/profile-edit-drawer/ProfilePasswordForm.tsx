import React, { useState } from 'react'
import ProfileInput from './ProfileInput'
import tw, { styled } from 'twin.macro'

const Form = styled.form`
  ${tw`w-full flex flex-col`}
`

const SubmitButton = styled.button`
  padding: 8px 15px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  align-self: flex-end;
  font-size: 0.8rem;
`
function ProfilePasswordForm() {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true)

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    setConfirmPassword(value)
    setIsPasswordMatch(password === value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ProfileInput
        labelName="비밀번호"
        value={password}
        placeholder="새로운 비밀번호를 입력해주세요."
        type="password"
        onChangeInput={handleChangePassword}
      />
      <ProfileInput
        labelName="비밀번호 확인"
        value={confirmPassword}
        placeholder="비밀번호를 다시 입력해주세요."
        type="password"
        onChangeInput={handleChangeConfirmPassword}
      />
      {!isPasswordMatch && (
        <span className="text-xs text-[crimson] px-1 py-2 w-fit">
          비밀번호가 일치하지 않습니다.
        </span>
      )}
      <SubmitButton type="submit">변경</SubmitButton>
    </Form>
  )
}

export default ProfilePasswordForm
