import { axiosInstanceWithToken } from '../api'
import { CREATE_POST_PATH } from '@/apis/api_paths'

async function createPost(formData: FormData) {
  try {
    await axiosInstanceWithToken.post(CREATE_POST_PATH, formData)
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default createPost
