import { axiosInstance } from '../api'
import { SEARCH_USERS_PATH } from '@/apis/api_paths'

interface SearchResponse {
  users: User[]
}

interface SearchParams {
  query: string
}

async function searchUser({ query }: SearchParams): Promise<SearchResponse> {
  try {
    const response = await axiosInstance.get(`${SEARCH_USERS_PATH}/${query}`)

    return {
      users: response.data
    }
  } catch (error) {
    throw new Error('Error while searching')
  }
}

export default searchUser
