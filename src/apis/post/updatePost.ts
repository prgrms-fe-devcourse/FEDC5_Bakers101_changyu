import { axiosInstanceWithToken } from '../api'
import { UPDATE_POST_PATH } from '@/apis/api_paths'

async function updatePost(formData: FormData) {
  try {
    await axiosInstanceWithToken.put(UPDATE_POST_PATH, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default updatePost
