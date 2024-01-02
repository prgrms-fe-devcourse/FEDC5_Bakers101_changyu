import tw, { styled } from 'twin.macro'

import ProfileInput from './ProfileInput'

import updateName from '@/apis/updateName'
import { useProfileStore } from '@/stores/userProfileStore'
import useForm from '@/hooks/useForm'

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

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000))
}

const ProfileNameForm = () => {
  const { profile, setProfile } = useProfileStore()
  const { values, isLoading, handleChange, handleSubmit } = useForm({
    initialValue: {
      fullName: profile?.fullName || '',
      username: profile?.username || ''
    },
    onSubmit: async (values) => {
      await sleep()
      const data = await updateName(values)
      setProfile(data)
    }
  })

  return (
    <Form onSubmit={handleSubmit}>
      <ProfileInput
        labelName="사용자 명"
        value={values.username}
        name="username"
        placeholder="사용자 명을 입력해주세요."
        type="text"
        onChangeInput={handleChange}
      />
      <ProfileInput
        labelName="실명"
        value={values.fullName}
        name="fullName"
        placeholder="실명을 입력해주세요."
        type="text"
        onChangeInput={handleChange}
      />
      <SubmitButton type="submit">
        {isLoading ? '변경 중' : '변경'}
      </SubmitButton>
    </Form>
  )
}

export default ProfileNameForm
