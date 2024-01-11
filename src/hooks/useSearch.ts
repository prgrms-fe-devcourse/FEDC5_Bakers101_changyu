import { useState } from 'react'

interface IUseSearch {
  initialValue: string
  onSearch: (value: string) => Promise<void>
  validate?: (value: string) => string
}

const useSearch = ({ initialValue, onSearch, validate }: IUseSearch) => {
  const [value, setValue] = useState(initialValue)
  const [type, setType] = useState('all') // ['all', 'user']
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value.length > 1) setError('')
    setValue(value)
  }

  const handleClickFilter = (type: string) => {
    setType(type)
  }

  const handleSearch = async (
    value: string,
    e?: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setIsLoading(true)
    if (e) {
      if (e.key === 'Enter') {
        const newError = validate ? validate(value) : ''
        if (newError.length === 0) {
          await onSearch(value)
        }
        setError(newError)
        setIsLoading(false)
      }
      return
    }

    const newError = validate ? validate(value) : ''
    if (newError.length === 0) {
      await onSearch(value)
      setValue('')
    }
    setError(newError)
    setIsLoading(false)
  }

  return {
    value,
    type,
    error,
    isLoading,
    handleChange,
    handleSearch,
    handleClickFilter
  }
}

export default useSearch
