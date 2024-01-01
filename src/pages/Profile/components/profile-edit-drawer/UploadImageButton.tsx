import { ChangeEvent, useCallback, useRef } from 'react'

import tw, { styled } from 'twin.macro'

import handleImageFormData from '@/utils/handleImageFormData'
import uploadImage from '@/apis/uploadImage'
import { useProfileStore } from '@/stores/userProfileStore'

const FileInput = styled.input`
  ${tw`file-input file-input-bordered w-full max-w-xs hidden`}
`
const UploadButton = styled.button``

interface UploadImageButtonProps {
  children: React.ReactNode
  className: string
  isCover: boolean
}

function UploadImageButton({
  children,
  className,
  isCover
}: UploadImageButtonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { setProfile } = useProfileStore()

  const handleUploadImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return
      const file = e.target.files[0]
      const formData = handleImageFormData({
        imageFile: file,
        type: 'Profile',
        isCover
      })

      const response = await uploadImage(formData)
      setProfile(response)
    },
    [isCover, setProfile]
  )

  const handleClickUploadButton = useCallback(() => {
    if (!inputRef.current) return

    inputRef.current.click()
  }, [])

  return (
    <>
      {/* Input은 display: none을 주어도, UploadButton에 의해 정상적으로 동작합니다. */}
      <FileInput
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={(e) => handleUploadImage(e)}
      />
      <UploadButton
        className={className}
        onClick={handleClickUploadButton}>
        {children}
      </UploadButton>
    </>
  )
}

export default UploadImageButton
