import { useState } from 'react'

interface Value {
  [key: string]: string
}

interface IUseForm {
  initialValue: Value
  onSubmit: (values: Value) => Promise<void>
  validate?: (values: Value) => any
}

const useForm = ({ initialValue, onSubmit, validate }: IUseForm) => {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
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

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  }
}

export default useForm
