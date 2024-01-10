import { useState, useEffect } from 'react'

import { useNavigate, Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { getUserInform } from '@/apis/userApis'
import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'
import NoImage from '@/assets/temp/noImage.png'
import getPostLiveTime from '@/utils/getPostCreateTime'

const PostItemContainer = styled.div(({ isLoading }) => [
  tw`flex flex-col gap-4 bg-white transition-all duration-700 ease-in-out transform rounded-lg p-2 shadow-lg`,
  isLoading ? tw`translate-y-[0%]` : tw`translate-y-[80%] opacity-0`
])

const PostItemHeader = styled.div`
  ${tw`flex justify-between items-center px-2 py-2`}
`

const PostItemBody = styled.div`
  ${tw`flex gap-3 h-32`}
`

const PostItemBottomNav = styled.div`
  ${tw`flex justify-between w-full h-8  rounded-lg  px-3 drop-shadow-2xl`}
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

  useEffect(() => {
    const fetchUserInform = async () => {
      const response = await getUserInform(postDetail.author._id)
      setUserImg(response.image || null)
    }
    fetchUserInform()
    setTimeout(() => setIsLoading(true), index * 120)
  }, [postDetail.author._id, index])

  return (
    <PostItemContainer
      isLoading={isLoading}
      onClick={() => navigate(`/post-detail/${postDetail._id}`)}>
      <PostItemHeader>
        <div className="flex gap-2 items-center">
          <Link
            to={`/profile/${postDetail.author._id}`}
            className="flex gap-2 items-center">
            {userImg ? (
              <img
                src={userImg as string}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <p className="w-[1.4rem] h-[1.4rem] bg-yellow-300 rounded-full"></p>
            )}
            <p className="font-bold">{authorName}</p>
          </Link>
          <p className="my-auto font-bold text-purple-500 text-[0.6rem]">
            팔로우 중
          </p>
        </div>
        <p className="text-xs font-semibold pr-2 rounded-xl bg-brand-primary p-1 px-2 text-[#fff]">
          {channelName}
        </p>
      </PostItemHeader>
      <PostItemBody>
        <div className="w-32 h-32 min-w-32">
          {postImage ? (
            <img
              src={postImage}
              className="w-full h-full bg-cover bg-white rounded-md"
            />
          ) : (
            <img
              src={NoImage}
              className="bg-cover bg-white rounded-md"
            />
          )}
        </div>
        <div className="min-w-0 max-h-full grow flex flex-col">
          <p className="font-bold text-xl truncate mb-2 shrink-0">{title}</p>
          <p className="line-clamp-3 pr-2">{body}</p>
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
