import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { getUserInform } from '@/apis/userApis'

import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'
import NoImage from '@/assets/temp/noImage.png'
import getPostLiveTime from '@/utils/getPostCreateTime'

const PostItemContainer = styled.div(({ isLoading }) => [
  tw`w-[21.5rem] h-[11.3rem] mx-auto bg-white my-8 transition-all duration-700 ease-in-out transform`,
  isLoading ? tw`translate-y-[0%]` : tw`translate-y-[80%] opacity-0`
])

const PostItemHeader = styled.div`
  ${tw`flex justify-between mx-2 my-1`}
`

const PostItemBody = styled.div`
  ${tw`flex mx-2 gap-3 my-2`}
`

const PostItemBottomNav = styled.div`
  ${tw`flex justify-between w-full h-8 bg-white rounded-lg border-slate-100 border-2 px-3 drop-shadow-2xl`}
`

type PostItemType = {
  postDetail: Post
  index: number
}

const PostlItem = ({ postDetail, index }: PostItemType) => {
  const { title, body } = JSON.parse(postDetail.title)
  const channelName = postDetail.channel.name
  const authorName = postDetail.author.fullName
  const likesNum = postDetail.likes.length
  const commentsNum = postDetail.comments.length
  const postImage = postDetail.image
  const timeString = getPostLiveTime(postDetail.createdAt)

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [userImg, setUserImg] = useState(null)

  const fetchUserInform = async () => {
    const response = await getUserInform(postDetail.author._id)
    setUserImg(response.image || null)
  }

  useEffect(() => {
    fetchUserInform()
    setTimeout(() => setIsLoading(true), index * 120)
  }, [])

  return (
    <PostItemContainer
      isLoading={isLoading}
      onClick={() => navigate(`/post-detail/${postDetail._id}`)}>
      <PostItemHeader>
        <div className="flex gap-2">
          {userImg ? (
            <img
              src={userImg as string}
              className="'w-[1.4rem] h-[1.4rem] rounded-full"
            />
          ) : (
            <p className="w-[1.4rem] h-[1.4rem] bg-yellow-300 rounded-full "></p>
          )}
          <p className="font-bold">{authorName}</p>
          <p className="my-auto font-bold text-purple-500 text-[0.6rem] ">
            팔로우 중
          </p>
        </div>
        <p className="text-[0.7rem] font-semibold">{channelName}</p>
      </PostItemHeader>
      <PostItemBody>
        {postImage ? (
          <img
            src={postImage}
            className="w-[6rem] h-[5.5rem] bg-white rounded-md my-1"
          />
        ) : (
          <img
            src={NoImage}
            className="w-[6rem] h-[5.5rem] bg-white rounded-md my-1 border-1"
          />
        )}
        <div className="max-h-[4rem]">
          <p className="w-[11rem] max-h-[2rem] overflow-hidden text-ellipsis">
            {title}
          </p>
          <p className="w-[11rem] max-h-[4rem] text-[0.7rem] overflow-hidden text-ellipsis">
            {body}
          </p>
        </div>
      </PostItemBody>
      <PostItemBottomNav>
        <div className="flex gap-2 w-fit h-fit my-auto">
          <div className="flex gap-1">
            <img
              className="w-4 h-4 my-auto"
              src={HeartIcon}
            />
            <p className="text-[0.9rem]">{likesNum}</p>
          </div>
          <div className="flex gap-1">
            <img
              className="w-4 h-4 my-auto"
              src={CommentIcon}
            />
            <p className="text-[0.9rem]">{commentsNum}</p>
          </div>
        </div>
        <p className="w-fit h-fit my-auto text-[0.8rem]">{timeString}</p>
      </PostItemBottomNav>
    </PostItemContainer>
  )
}

export default PostlItem
