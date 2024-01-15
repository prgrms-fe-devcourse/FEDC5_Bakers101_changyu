import { SEARCH_ALL_PATH } from '@/apis/api_paths'
import axiosInstance from '../api'

interface SearchResponse {
  posts: Post[]
  users: User[]
}

interface SearchParams {
  query: string
}

async function searchAll({ query }: SearchParams): Promise<SearchResponse> {
  try {
    const response = await axiosInstance.get(`${SEARCH_ALL_PATH}/${query}`)
    const data = response.data

    const filteredPost: Post[] = data.filter(
      (item: Post | User): item is Post => {
        return item instanceof Object && 'title' in item
      }
    )

    const filteredUser: User[] = data.filter(
      (item: Post | User): item is User => {
        return item instanceof Object && 'role' in item
      }
    )

    return {
      posts: filteredPost,
      users: filteredUser
    }
  } catch (error) {
    throw new Error('Error while searching')
  }
}

export default searchAll
