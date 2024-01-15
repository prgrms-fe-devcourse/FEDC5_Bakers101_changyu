import { axiosInstanceWithToken } from '../api'
import { DELETE_POST_PATH } from '@/apis/api_paths'

async function deletePost(id: string) {
  try {
    await axiosInstanceWithToken.delete(DELETE_POST_PATH, { data: { id } })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default deletePost
