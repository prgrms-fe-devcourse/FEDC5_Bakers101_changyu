import { axiosInstance } from '../api'
import { LOGIN_PATH } from '@/apis/api_paths'

type UserResponse = {
  user: User
  token: string
}

export async function login(
  email: string,
  password: string
): Promise<UserResponse> {
  const requestBody = {
    email,
    password
  }

  const response = await axiosInstance.post<UserResponse>(
    LOGIN_PATH,
    requestBody
  )

  return response.data
}
