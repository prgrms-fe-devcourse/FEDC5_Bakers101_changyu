import axiosInstance from './api'
import { getChannelList } from './channelApis'
import {
  CREATE_POST_PATH,
  DELETE_POST_PATH,
  GET_DETAIL_POST_PATH,
  GET_POST_LIST_BY_CHANNEL_PATH,
  UPDATE_POST_PATH
} from '@/utils/api_paths'

async function createPost(formData: FormData) {
  try {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token as string)
    await axiosInstance.post(CREATE_POST_PATH, formData, {
      headers: {
        Authorization: `bearer ${parsedToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}
async function updatePost(token: string, formData: FormData) {
  try {
    await axiosInstance.put(UPDATE_POST_PATH, formData, {
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

async function deletePost(token: string, id: string) {
  try {
    await axiosInstance.delete(DELETE_POST_PATH, {
      headers: { Authorization: `bearer ${token}` },
      data: { id: id }
    })
  } catch (error) {
    throw new Error(`${error}`)
  }
}

const getPostDetail = async (postId: string) => {
  try {
    const request = await axiosInstance.get(`${GET_DETAIL_POST_PATH}/${postId}`)
    return request.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

async function getPostList(channelId: string) {
  try {
    const request = await axiosInstance.get(
      `${GET_POST_LIST_BY_CHANNEL_PATH}/${channelId}`
    )
    if (!request) return
    request.data.sort(
      (a: Post, b: Post) => Number(b.createdAt) - Number(a.createdAt)
    )
    return request.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

async function getAllPostList() {
  try {
    const channelList = await getChannelList()
    const postListPromises = channelList.map(({ _id }: Post) => {
      return getPostList(_id)
    })
    const postList = (await Promise.all(postListPromises)).flat()
    postList.sort(
      (a: Post, b: Post) => {
        const dateA = new Date(a.createdAt).getTime()
        const dateB = new Date(b.createdAt).getTime()
        return dateB- dateA
      }
    )
    return postList
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export {
  deletePost,
  createPost,
  getPostDetail,
  updatePost,
  getPostList,
  getAllPostList
}
