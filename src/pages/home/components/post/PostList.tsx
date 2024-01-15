import { useState, useEffect } from 'react'

import getAllPostList from '@/apis/post/getAllPostList'
import getPostList from '@/apis/post/getPostList'
import NonePost from './NonePost'
import PostItem from './PostItem'

type nowChannelType = {
  title: string
  id?: string
}

const PostList = ({ title, id }: nowChannelType) => {
  const [postList, setPostList] = useState<Post[]>([])

  const fetchPostList = async () => {
    if (title === '전체 채널' && id === undefined) {
      (async () => {
        const channeListRequest = await getAllPostList()
        setPostList(channeListRequest)
      })()
    } else if (id !== undefined) {
      (async () => {
        const channeListRequest = await getPostList(id)
        setPostList(channeListRequest)
      })()
    }
  }
  useEffect(() => {
    fetchPostList()
  }, [title])

  return (
    <div className="relative flex flex-col gap-4">
      {postList.length ? (
        postList.map((item, index) => (
          <button key={item._id}>
            <PostItem
              postDetail={item}
              index={index}
            />
          </button>
        ))
      ) : (
        <NonePost />
      )}
    </div>
  )
}

export default PostList
