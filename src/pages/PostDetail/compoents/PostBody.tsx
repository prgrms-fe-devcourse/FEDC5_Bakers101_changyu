import tw, { styled } from 'twin.macro'
import { useState } from 'react'

import Comments from '@/components/comments'

import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'
import BookMarkIcon from '@/assets/icons/bookmark.svg'

type PostBodyType = {
  body: string
  likeNum: number
  commentNum: number
  postId: string
}

const PostBodyContainer = styled.div`
  ${tw`w-4/5 mx-auto px-2`}
`

const PostDetailWrapper = styled.div`
  ${tw`min-h-[26rem]`}
`

const PostBottomNavWrapper = styled.div`
  ${tw`flex justify-between mt-6`}
`

const PostBody = ({ body, likeNum, commentNum, postId }: PostBodyType) => {
  const [showComments, setShowComments] = useState(false)

  const handleCommentIconClick = () => {
    setShowComments(!showComments)
  }

  return (
    <PostBodyContainer>
      <PostDetailWrapper>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </PostDetailWrapper>
      <PostBottomNavWrapper>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <img
              className="w-5 h-5 my-auto"
              src={HeartIcon}
              alt="Heart Icon"
            />
            <p className="text-[0.9rem] text-[#767676]">{likeNum}</p>
          </div>
          <div
            className="flex gap-1"
            onClick={handleCommentIconClick}>
            <img
              className="w-5 h-5 my-auto"
              src={CommentIcon}
              alt="Comment Icon"
            />
            <p className="text-[0.9rem] text-[#767676]">{commentNum}</p>
          </div>
        </div>
        <img
          className="w-5 h-5"
          src={BookMarkIcon}
          alt="BookMark Icon"
        />
      </PostBottomNavWrapper>
      {showComments && <Comments postId={postId} />}
    </PostBodyContainer>
  )
}

export default PostBody
