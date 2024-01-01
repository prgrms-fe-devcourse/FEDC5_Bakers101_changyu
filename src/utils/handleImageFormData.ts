interface ImageFormData {
    imageFile: File
    type: 'Profile' | 'Post'
    isCover?: boolean
    channelId?: string
    title?:string
    body?:string
  }
  
  function handleImageFormData({
    imageFile,
    type,
    isCover,
    title,
    channelId,
    body,
  }: ImageFormData): FormData {
    const formData = new FormData()
    formData.append('image', imageFile)
    if (type === 'Profile') formData.append('isCover', String(isCover))
    if (type === 'Post') {
        formData.append('title', JSON.stringify({title : String(title),body : String(body)}))
        formData.append('channelId',String(channelId));
    }
    return formData
  }
  
  export default handleImageFormData