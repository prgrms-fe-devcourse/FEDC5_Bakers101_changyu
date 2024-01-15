import tw, { styled } from 'twin.macro'
import { deletePost } from '@/apis/postApis'
import { useNavigate } from 'react-router-dom'

const DeleteCheckModalContainer = styled.div`
  ${tw`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-fit px-8 py-6 border-2 border-gray-400`}
`

type DeleteCheckModalType = {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
}

export default function DeleteCheckModal({
  setIsDeleteModalOpen,
  postId
}: DeleteCheckModalType) {
  const navigate = useNavigate()

  const onClickDeleteButton = async () => {
    await deletePost(postId)
    setIsDeleteModalOpen(false)
    navigate('/home')
  }

  return (
    <DeleteCheckModalContainer>
      <p> 정말 이 포스트를 삭제 하시겠습니까?</p>
      <div className="w-[15rem] flex gap-3 justify-center">
        <button
          className="border-1 border-gray-200 px-3 py-1 my-2 rounded-md"
          onClick={onClickDeleteButton}>
          삭제
        </button>
        <button
          className="border-1 border-gray-200 px-3 py-1 my-2 rounded-md"
          onClick={() => setIsDeleteModalOpen(false)}>
          취소
        </button>
      </div>
    </DeleteCheckModalContainer>
  )
}
