import { UPDATE_PROFILE_IMAGE_PATH } from '@/apis/api_paths'
import axiosInstance from '../api'

async function uploadImage(formData: FormData) {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    const response = await axiosInstance.post(
      UPDATE_PROFILE_IMAGE_PATH,
      formData,
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    return response.data
  } catch (error) {
    throw new Error('Error while uploading image')
  }
}

export default uploadImage
