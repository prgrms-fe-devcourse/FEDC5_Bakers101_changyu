import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import { useProfileStore } from '@/stores/userProfileStore'

import ProfileImage from '@/components/profile-images'
import DeleteCheckModal from './DeleteCheckModal'

import getPostLiveTime from '@/utils/getPostCreateTime'
import prevIcon from '@/assets/icons/prev_brown.svg'

const PostHeaderContainer = styled.div`
  ${tw`flex flex-col`}
`
const PostEditDeleteButtonsWrapper = styled.div`
  ${tw`flex w-fit mx-auto gap-3 mt-3`}
`

const PostAuthorProfileWrapper = styled.div`
  ${tw`flex flex-col justify-center items-center gap-2 w-fit mx-auto text-center`}
  & > a {
    ${tw`flex flex-col items-center`}
  }
  & img {
    ${tw`mx-auto`}
  }
  & p {
    ${tw`mx-auto`}
  }
`

type PostHeaderType = {
  title: string
  author: User
  createAt: string
  profileImg?: string
  postId: string
  isOwner: boolean
}

const PostHeader = ({
  title,
  author,
  createAt,
  postId,
  isOwner
}: PostHeaderType) => {
  const [isOpenDeleteCheckModal, setIsOpenDeleteCheckModal] = useState(false)
  const { profile } = useProfileStore()
  const navigate = useNavigate()

  const getIsFollowed = () => {
    return Boolean(profile?.following.some((item) => item.user === author._id))
  }

  return (
    <PostHeaderContainer>
      <button
        onClick={() => navigate(-1)}
        className="my-2 mb-4">
        <img
          src={prevIcon}
          alt="prev-icon"
        />
      </button>
      <PostAuthorProfileWrapper>
        <Link to={`/profile/${author._id}`}>
          <ProfileImage profileImage={author.image as string} />
          <div className="flex mx-auto gap-2 w-fit">
            <p className="font-semibold text-[1.1rem] my-1">
              {author.fullName}
            </p>
            <p className="text-[0.65rem] my-auto text-purple-500 font-medium">
              {getIsFollowed() ? '팔로잉 중' : null}
            </p>
          </div>
        </Link>
        <p className="w-fit mx-auto text-[1.4rem] font-medium my-1">{title}</p>
        <p className="my-2 w-fit mx-auto text-[0.8rem]">
          {getPostLiveTime(createAt)}
        </p>
        {isOwner && (
          <PostEditDeleteButtonsWrapper>
            <Link
              to={`/post-edit/${postId}`}
              className="border-slate-200 border-1 px-3 py-1 rounded-lg bg-[#efb98b]">
              수정
            </Link>
            <button
              onClick={() => setIsOpenDeleteCheckModal(true)}
              className="border-slate-200 border-1 px-3 py-1 rounded-lg bg-[#efb98b]">
              삭제
            </button>
          </PostEditDeleteButtonsWrapper>
        )}
      </PostAuthorProfileWrapper>
      {isOpenDeleteCheckModal && (
        <DeleteCheckModal
          setIsDeleteModalOpen={setIsOpenDeleteCheckModal}
          postId={postId}
        />
      )}
    </PostHeaderContainer>
  )
}

export default PostHeader
