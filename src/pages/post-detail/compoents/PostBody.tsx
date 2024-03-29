import { useState } from 'react'

import dompurify from 'dompurify'
import LikeButton from '@/components/likes/Likes'

import tw, { styled } from 'twin.macro'

import Comments from '@/components/comments'
import CommentIcon from '@/assets/icons/comment.svg'
import BookMarkIcon from '@/assets/icons/bookmark.svg'

type PostBodyType = {
  body: string
  postUserId: string
  likeNum: number
  commentNum: number
  postId: string
}

const PostBodyContainer = styled.div`
  ${tw`w-4/5 mx-auto px-2 bg-white`}
`

const PostDetailWrapper = styled.div`
  ${tw`min-h-[26rem]`}
`

const PostBottomNavWrapper = styled.div`
  ${tw`flex justify-between mt-6`}
`

const PostBody = ({
  body,
  postUserId,
  likeNum,
  commentNum,
  postId
}: PostBodyType) => {
  const [commentNumber, setCommentNumber] = useState<number>(commentNum)
  const [showComments, setShowComments] = useState(false)

  const handleCommentIconClick = () => {
    setShowComments(!showComments)
  }

  return (
    <PostBodyContainer>
      <PostDetailWrapper>
        <div
          dangerouslySetInnerHTML={{ __html: dompurify.sanitize(String(body)) }}
        />
      </PostDetailWrapper>
      <PostBottomNavWrapper>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <LikeButton
              postUserId={postUserId}
              postId={postId}
              likeNum={likeNum}
            />
          </div>
          <div
            className="flex gap-1"
            onClick={handleCommentIconClick}>
            <img
              className="w-5 h-5 my-auto"
              src={CommentIcon}
              alt="Comment Icon"
            />
            <p className="text-[0.9rem] text-[#767676]">{commentNumber}</p>
          </div>
        </div>
        <img
          className="w-5 h-5"
          src={BookMarkIcon}
          alt="BookMark Icon"
        />
      </PostBottomNavWrapper>
      {showComments && (
        <Comments
          postUserId={postUserId}
          postId={postId}
          setCommentNumber={setCommentNumber}
        />
      )}
    </PostBodyContainer>
  )
}

export default PostBody
