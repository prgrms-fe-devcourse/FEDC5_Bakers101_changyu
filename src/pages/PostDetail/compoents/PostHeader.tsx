import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import prevIcon from '@/assets/icons/prev_brown.svg'
import peopleIcon from '@/assets/icons/profile.svg'
import getPostLiveTime from '@/utils/getPostCreateTime'
import DeleteCheckModal from './DeleteCheckModal'

const PostHeaderContainer = styled.div`
  ${tw``}
`
const PostEditDeleteButtonsWrapper = styled.div`
  ${tw`flex w-fit mx-auto gap-3 mt-3`}
`

const PostAuthorProfileWrapper = styled.div`
  ${tw`w-fit mx-auto`}
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

  return (
    <PostHeaderContainer>
      <Link
        to="/"
        className="my-2 mb-4">
        <img src={prevIcon} />
      </Link>
      <PostAuthorProfileWrapper>
        <div className="w-[4rem] h-[4rem] overflow-hidden mx-auto rounded-full">
          <img
            className="w-[4rem] h-[4rem] object-cover"
            src={author.image ? author.image : peopleIcon}
            alt="profileimg"
          />
        </div>
        <div className="flex mx-auto gap-2 w-fit">
          <p className="font-semibold text-[1.1rem] my-1">{author.fullName}</p>
          <p className="text-[0.65rem] my-auto text-purple-500 font-medium">
            팔로잉 중
          </p>
        </div>
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
