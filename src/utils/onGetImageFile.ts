const onGetImageFile = (onChangeFile: (newImage?: File) => void) => {
  const fileInput = document.createElement('input')
  fileInput.type = 'file'
  fileInput.accept = 'image/gif, image/jpeg,image/png,image/jpg'

  fileInput.onchange = (e: Event) => {
    if (!e.target) return
    const target = e.target as HTMLInputElement
    if (!target.files || !target.files[0]) return

    onChangeFile(target.files[0])
  }
  fileInput.click()
}

export default onGetImageFile
