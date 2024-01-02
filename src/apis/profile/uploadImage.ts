import { UPDATE_PROFILE_IMAGE_PATH } from '@/utils/api_paths'
import axiosInstance from '../api'

async function uploadImage(formData: FormData) {
  try {
    const response = await axiosInstance.post(
      UPDATE_PROFILE_IMAGE_PATH,
      formData,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
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
