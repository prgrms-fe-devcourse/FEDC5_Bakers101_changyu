import { axiosInstance } from '../api'
import { SIGNUP_PATH } from '@/apis/api_paths'

type UserResponse = {
  user: User
  token: string
}

export async function signUp(
  email: string,
  fullName: string,
  password: string
): Promise<UserResponse> {
  const requestBody = {
    email,
    fullName,
    password
  }

  const response = await axiosInstance.post<UserResponse>(
    SIGNUP_PATH,
    requestBody
  )

  return response.data
}
