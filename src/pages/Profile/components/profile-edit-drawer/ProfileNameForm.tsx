import tw, { styled } from 'twin.macro'
import ProfileInput from './ProfileInput'
import updateName from '@/apis/profile/updateName'
import useForm from '@/hooks/useForm'
import { useProfileStore } from '@/stores/userProfileStore'

const ERRORS = {
  EMPTY_FULLNAME: '실명을 입력해주세요.',
  TOO_LONG_FULLNAME: '실명은 6자 이내로 입력해주세요.',
  EMPTY_USERNAME: '사용자 명을 입력해주세요.',
  TOO_LONG_USERNAME: '사용자 명은 8자 이내로 입력해주세요.'
}

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
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValue: {
      fullName: profile?.fullName || '',
      username: profile?.username || ''
    },
    onSubmit: async (values) => {
      await sleep()
      const data = await updateName(values)
      setProfile(data)
    },
    validate: (values) => {
      const errors = {} as Record<string, string>

      if (values.fullName.length === 0) {
        errors.fullName = ERRORS.EMPTY_FULLNAME
      } else if (values.fullName.length > 6) {
        errors.fullName = ERRORS.TOO_LONG_FULLNAME
      }

      if (values.username.length === 0) {
        errors.username = ERRORS.EMPTY_USERNAME
      } else if (values.username.length > 8) {
        errors.username = ERRORS.TOO_LONG_USERNAME
      }

      return errors
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
        error={errors.username}
      />
      <ProfileInput
        labelName="실명"
        value={values.fullName}
        name="fullName"
        placeholder="실명을 입력해주세요."
        type="text"
        onChangeInput={handleChange}
        error={errors.fullName}
      />
      <SubmitButton type="submit">
        {isLoading ? '변경 중' : '변경'}
      </SubmitButton>
    </Form>
  )
}

export default ProfileNameForm
