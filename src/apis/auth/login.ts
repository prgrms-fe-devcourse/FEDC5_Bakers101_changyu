import axiosInstance from '../api'
import { LOGIN_PATH } from '@/utils/api_paths'

type UserResponse = {
  user: User
  token: string
}

//로그인함수
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
