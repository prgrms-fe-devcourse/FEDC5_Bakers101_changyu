import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { useProfileStore } from '@/stores/userProfileStore'

import ProfileImage from '@/components/profile-images'
import getPostLiveTime from '@/utils/getPostCreateTime'

import NoImage from '@/assets/temp/noImage.png'
import CommentIcon from '@/assets/icons/comment.svg'
import HeartIcon from '@/assets/icons/following.svg'

interface PostItemProps {
  post: Post
}

const PostItemContainer = styled.div`
  ${tw`flex flex-col gap-4 bg-white transition-all duration-700 ease-in-out transform rounded-lg p-2 shadow-lg`}
`

const PostItemHeader = styled.div`
  ${tw`flex justify-between items-center px-2 py-2`}
`

const PostItemBody = styled.div`
  ${tw`flex gap-3 h-32`}
`

const PostItemBottomNav = styled.div`
  ${tw`flex justify-between w-full h-8  rounded-lg  px-3 drop-shadow-2xl`}
`

const MyPostItem = ({ post }: PostItemProps) => {
  const { title, body } = JSON.parse(post.title)
  const timeString = getPostLiveTime(post.createdAt)
  const navigate = useNavigate()
  const { profile } = useProfileStore()

  const getHtmlToTextString = useCallback((htmlString: string) => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = htmlString
    return tempDiv.textContent
  }, [])

  return (
    <PostItemContainer onClick={() => navigate(`/post-detail/${post._id}`)}>
      <PostItemHeader>
        <div className="flex gap-2 items-center">
          <Link
            to={`/profile/${post.author}`}
            onClick={(event) => event.stopPropagation()}
            className="flex gap-2 items-center">
            <ProfileImage profileImage={profile?.image as string} />
            <p className="font-bold">{profile?.fullName}</p>
          </Link>
        </div>
        <p className="text-xs font-semibold pr-2 rounded-xl bg-brand-primary p-1 px-2 text-[#fff]">
          채널명
        </p>
      </PostItemHeader>
      <PostItemBody>
        <div className="w-32 h-32 min-w-32">
          {post.image ? (
            <img
              src={post.image}
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
          <p className="line-clamp-3 pr-2 text-left mx-1">
            {getHtmlToTextString(body)}
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
            <p className="text-[0.9rem]">{post.likes.length}</p>
          </div>
          <div className="flex gap-1">
            <img
              className="w-4 h-4 my-auto"
              src={CommentIcon}
            />
            <p className="text-[0.9rem]">{post.comments.length}</p>
          </div>
        </div>
        <p className="w-fit h-fit my-auto text-[0.8rem]">{timeString}</p>
      </PostItemBottomNav>
    </PostItemContainer>
  )
}

export default MyPostItem
