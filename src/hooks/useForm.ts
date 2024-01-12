import isPasswordValid from '@/utils/passwordValidator'
import { useState } from 'react'

const ERRORS = {
  EMPTY_FULLNAME: '실명을 입력해주세요.',
  TOO_LONG_FULLNAME: '실명은 6자 이내로 입력해주세요.',
  EMPTY_USERNAME: '사용자 명을 입력해주세요.',
  TOO_LONG_USERNAME: '사용자 명은 8자 이내로 입력해주세요.',
  WRONG_CONDITION: '*8자 이상, 특수문자, 대문자, 숫자',
  WRONG_CONFIRM_PASSWORD: '비밀번호가 일치하지 않습니다.'
}

interface Value {
  [key: string]: string
}

interface IUseForm {
  initialValue: Value
  onSubmit: (values: Value) => Promise<void>
  validate?: (values: Value) => Record<string, string>
}

const useForm = ({ initialValue, onSubmit, validate }: IUseForm) => {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    handleRealTimeValidation(name, value)

    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const newErros = validate ? validate(values) : {}
    if (Object.keys(newErros).length === 0) {
      await onSubmit(values)
    }
    setErrors(newErros)
    setIsLoading(false)
  }

  const handleRealTimeValidation = (name: string, value: string) => {
    if (name === 'password') {
      if (!isPasswordValid(value)) {
        setErrors({ ...errors, password: ERRORS.WRONG_CONDITION })
      } else {
        setErrors({ ...errors, password: '' })
      }
    }

    if (name === 'confirmPassword') {
      if (values.password !== value) {
        setErrors({ ...errors, confirmPassword: ERRORS.WRONG_CONFIRM_PASSWORD })
      } else {
        setErrors({ ...errors, confirmPassword: '' })
      }
    }

    if (name === 'fullName') {
      if (value.length > 6) {
        setErrors({ ...errors, fullName: ERRORS.TOO_LONG_FULLNAME })
      } else if (value.length === 0) {
        setErrors({ ...errors, fullName: ERRORS.EMPTY_FULLNAME })
      } else {
        setErrors({ ...errors, fullName: '' })
      }
    }

    if (name === 'username') {
      if (value.length > 8) {
        setErrors({ ...errors, username: ERRORS.TOO_LONG_USERNAME })
      } else if (value.length === 0) {
        setErrors({ ...errors, username: ERRORS.EMPTY_USERNAME })
      } else {
        setErrors({ ...errors, username: '' })
      }
    }
  }
  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  }
}

export default useForm
