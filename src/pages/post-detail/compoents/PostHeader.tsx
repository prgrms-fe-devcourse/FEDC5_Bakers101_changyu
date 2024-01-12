import tw, { styled } from 'twin.macro'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useProfileStore } from '@/stores/userProfileStore'

import NoProfileThumbnailIcon from '@/pages/search/components/NoProfileThumbnailIcon'
import prevIcon from '@/assets/icons/prev_brown.svg'
import getPostLiveTime from '@/utils/getPostCreateTime'
import DeleteCheckModal from './DeleteCheckModal'

const PostHeaderContainer = styled.div`
  ${tw``}
`
const PostEditDeleteButtonsWrapper = styled.div`
  ${tw`flex w-fit mx-auto gap-3 mt-3`}
`

const PostAuthorProfileWrapper = styled.div`
  ${tw`w-fit mx-auto my-2`}
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
        <img src={prevIcon} />
      </button>
      <PostAuthorProfileWrapper>
        <Link to={`/profile/${author._id}`}>
          <div className="w-[4rem] h-[4rem] overflow-hidden mx-auto rounded-full">
            {author.image ? (
              <img
                className="w-[4rem] h-[4rem] object-cover"
                src={author.image}
                alt="profileimg"
              />
            ) : (
              <NoProfileThumbnailIcon className="w-[4rem] h-[4rem] rounded-full text-[#ddd] bg-[#fff]" />
            )}
          </div>
          <div className="flex mx-auto gap-2 w-fit">
            <p className="font-semibold text-[1.1rem] my-1">
              {author.fullName}
            </p>
            <p className="text-[0.65rem] my-auto text-purple-500 font-medium">
              {getIsFollowed() ? '팔로잉 중' : null}
            </p>
          </div>
        </Link>
        <p className="w-fit mx-auto text-[1.4rem] font-medium my-2">{title}</p>
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
