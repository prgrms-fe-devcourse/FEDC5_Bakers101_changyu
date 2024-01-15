import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useProfileStore } from '@/stores/userProfileStore'
import PostHeader from './compoents/PostHeader'
import PostBody from './compoents/PostBody'

import getPostDetail from '@/apis/post/getPostDetail'

const PostDetail = () => {
  const [postDetails, setPostDetails] = useState<Post>()
  const { profile } = useProfileStore()

  const params = useParams()
  const productId = params.id

  useEffect(() => {
    ;(async () => {
      if (!productId) return
      const details = await getPostDetail(productId)
      await setPostDetails(details)
    })()
  }, [])

  return (
    <div>
      {postDetails && (
        <div>
          <PostHeader
            postId={postDetails._id}
            title={JSON.parse(postDetails.title).title}
            author={postDetails.author}
            createAt={postDetails.createdAt}
            profileImg={postDetails.image}
            isOwner={postDetails.author._id === profile?._id}
          />
          <hr className="w-4/5 mx-auto my-8 px-2" />
          <PostBody
            body={JSON.parse(postDetails.title).body}
            postUserId={postDetails.author._id}
            likeNum={postDetails.likes.length}
            commentNum={postDetails.comments.length}
            postId={postDetails._id}
          />
          <hr className="w-4/5 mx-auto mb-8 mt-2 px-2" />
        </div>
      )}
    </div>
  )
}

export default PostDetail
