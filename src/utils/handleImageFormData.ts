interface ImageFormData {
  imageFile: File
  type: 'Profile' | 'Post'
  isCover?: boolean
}

function handleImageFormData({ imageFile, type, isCover }: ImageFormData): FormData {
  const formData = new FormData()

  formData.append('image', imageFile)

  if (type === 'Profile') formData.append('isCover', String(isCover))
  
  return formData
}

export default handleImageFormData
