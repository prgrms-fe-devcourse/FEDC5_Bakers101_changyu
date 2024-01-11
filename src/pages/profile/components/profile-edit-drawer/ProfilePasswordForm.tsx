import tw, { styled } from 'twin.macro'

import ProfileInput from './ProfileInput'

import updatePassword from '@/apis/profile/updatePassword'
import useForm from '@/hooks/useForm'
import isPasswordValid from '@/utils/passwordValidator'

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

const ProfilePasswordForm = () => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValue: {
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      await sleep()
      await updatePassword({
        password: values.password
      })
    },
    validate: (values) => {
      const errors = {} as Record<string, string>
      if (!isPasswordValid(values.password)) {
        errors.password =
          '*8자 이상, 특수문자, 대문자, 숫자'
      }

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = '비밀번호가 일치하지 않습니다.'
      }

      return errors
    }
  })

  return (
    <Form onSubmit={handleSubmit}>
      <ProfileInput
        labelName="비밀번호"
        value={values.password}
        name="password"
        placeholder="새로운 비밀번호를 입력해주세요."
        type="password"
        onChangeInput={handleChange}
        error={errors.password}
      />
      <ProfileInput
        labelName="비밀번호 확인"
        value={values.confirmPassword}
        name="confirmPassword"
        placeholder="비밀번호를 다시 입력해주세요."
        type="password"
        onChangeInput={handleChange}
        error={errors.confirmPassword}
      />
      <span className="text-xs text-[crimson] px-1 py-2 w-fit">
      </span>
      <SubmitButton type="submit">
        {isLoading ? '변경 중' : '변경'}
      </SubmitButton>
    </Form>
  )
}

export default ProfilePasswordForm
