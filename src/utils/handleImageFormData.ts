interface ImageFormData {
    imageFile: File
    type: 'Profile' | 'Post'
    isCover?: boolean
    channelId?: string
    title?:string
  }
  
  function handleImageFormData({
    imageFile,
    type,
    isCover,
    title,
    channelId
  }: ImageFormData): FormData {
    const formData = new FormData()
    formData.append('image', imageFile)
    console.log(   imageFile);
    console.log(
        type,
        isCover,
        title,
        channelId)
    if (type === 'Profile') formData.append('isCover', String(isCover))
    if (type === 'Post') {
        formData.append('title',String(title))
        formData.append('channelId',String(channelId));
    }
    console.log(formData);
    return formData
  }
  
  export default handleImageFormData