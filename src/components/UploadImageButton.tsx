import { ChangeEvent, useCallback, useRef } from 'react'
import axiosInstance from '@/apis/api'
import { UPDATE_PROFILE_IMAGE_PATH } from '@/utils/api_paths'
import tw, { styled } from 'twin.macro'

const FileInput = styled.input`
  ${tw`file-input file-input-bordered w-full max-w-xs hidden`}
`
const UploadButton = styled.button`
  ${tw`border border-black p-2 rounded-lg`}
`

function UploadImageButton() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement>, isCover: boolean) => {
      if (!e.target.files) return
      const formData = new FormData()

      formData.append('image', e.target.files[0])
      formData.append('isCover', isCover ? 'true' : 'false')

      await axiosInstance.post(UPDATE_PROFILE_IMAGE_PATH, formData, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          'Content-Type': 'multipart/form-data'
        }
      })
    },
    []
  )

  const handleClickUploadButton = useCallback(() => {
    if (!inputRef.current) return

    inputRef.current.click()
  }, [])

  return (
    <>
      <FileInput
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={(e) => handleUploadImage(e, false)}
      />
      <UploadButton onClick={handleClickUploadButton}>Upload</UploadButton>
    </>
  )
}

export default UploadImageButton
