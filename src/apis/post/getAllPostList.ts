import getChannelList from '../channel/getChannelList'
import getPostList from './getPostList'

async function getAllPostList() {
  try {
    const channelList = await getChannelList()
    const postListPromises = channelList.map(({ _id }: Post) => {
      return getPostList(_id)
    })
    const postList = (await Promise.all(postListPromises)).flat()
    postList.sort((a: Post, b: Post) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return dateB - dateA
    })
    return postList
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export default getAllPostList
