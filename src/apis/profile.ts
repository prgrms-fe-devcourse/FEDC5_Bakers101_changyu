import axiosInstance from './api'

interface ProfileResponse extends User {}

async function getProfile(): Promise<ProfileResponse> {
  try {
    const response = await axiosInstance.get(
      `/users/${import.meta.env.VITE_USER_ID}`
    )

    return response.data
  } catch (error) {
    throw new Error('Error while fetching profile')
  }
}

export default getProfile
