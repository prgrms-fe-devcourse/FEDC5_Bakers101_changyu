import tw, { styled } from 'twin.macro'

import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'
import BookMarkIcon from '@/assets/icons/bookmark.svg'

type PostBodyType = {
  body: string
  likeNum: number
  commentNum: number
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

const PostBody = ({ body, likeNum, commentNum }: PostBodyType) => {
  return (
    <PostBodyContainer>
      <PostDetailWrapper>
        <p className="">{body}</p>
      </PostDetailWrapper>
      <PostBottomNavWrapper>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <img
              className="w-5 h-5 my-auto"
              src={HeartIcon}
            />
            <p className="text-[0.9rem] text-[#767676]">{likeNum}</p>
          </div>
          <div className="flex gap-1">
            <img
              className="w-5 h-5 my-auto"
              src={CommentIcon}
            />
            <p className="text-[0.9rem] text-[#767676]">{commentNum}</p>
          </div>
        </div>
        <img
          className="w-5 h-5"
          src={BookMarkIcon}
        />
      </PostBottomNavWrapper>
    </PostBodyContainer>
  )
}

export default PostBody
