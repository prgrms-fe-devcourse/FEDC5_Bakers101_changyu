import React from 'react'
import tw, { styled } from 'twin.macro'

interface InputProps {
  labelName: string
  name: string
  value: string
  placeholder: string
  type: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const Input = styled.input`
  ${tw`w-full border-b outline-none focus:border-brand-primary px-3 py-2`}
`

const Label = styled.label`
  ${tw`label grow shrink-0 text-sm`}
`

const ProfileInput = ({
  labelName,
  name,
  value,
  placeholder,
  type,
  onChangeInput,
  error
}: InputProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Label>{labelName}</Label>
        <p className="text-xs text-[crimson] px-1 py-2">{error}</p>
      </div>
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
