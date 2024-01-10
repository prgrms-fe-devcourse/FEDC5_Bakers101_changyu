import React from 'react'
import tw, { styled } from 'twin.macro'

interface InputProps {
  labelName: string
  name: string
  value: string
  placeholder: string
  type: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input`
  ${tw`w-full border-b outline-none focus:border-brand-primary px-3 py-2`}
`

const Label = styled.label`
  ${tw`label`}
`

const ProfileInput = ({
  labelName,
  name,
  value,
  placeholder,
  type,
  onChangeInput
}: InputProps) => {
  return (
    <div>
      <Label>{labelName}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  )
}

export default ProfileInput
  