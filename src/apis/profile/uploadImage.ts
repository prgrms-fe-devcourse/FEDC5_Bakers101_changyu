import { axiosInstanceWithToken } from '../api'
import { UPDATE_PROFILE_IMAGE_PATH } from '@/apis/api_paths'

async function uploadImage(formData: FormData) {
  try {
    const response = await axiosInstanceWithToken.post(
      UPDATE_PROFILE_IMAGE_PATH,
      formData,
      {
        headers: {
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