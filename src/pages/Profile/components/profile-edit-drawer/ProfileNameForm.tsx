import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import ProfileInput from './ProfileInput'
import { useProfileStore } from '@/stores/userProfileStore'

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

function ProfileNameForm() {
  const { profile } = useProfileStore()
  const [userName, setUserName] = useState<string>(profile?.username ?? '')
  const [fullName, setFullName] = useState<string>(profile?.fullName ?? '')

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ProfileInput
        labelName="사용자 명"
        value={userName}
        placeholder="사용자 명을 입력해주세요."
        type="text"
        onChangeInput={handleChangeUserName}
      />
      <ProfileInput
        labelName="실명"
        value={fullName}
        placeholder="실명을 입력해주세요."
        type="text"
        onChangeInput={handleChangeFullName}
      />
      <SubmitButton type="submit">변경</SubmitButton>
    </Form>
  )
}

export default ProfileNameForm
