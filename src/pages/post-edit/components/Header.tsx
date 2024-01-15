import tw, { styled } from 'twin.macro'
import { useNavigate } from 'react-router-dom'

import PrevBrownIcon from '@/assets/icons/prev_brown.svg'
import EditIcon from '@/assets/icons/edit.svg'

type PostEditHeader = {
  onClickSubmitButtn: () => void
}

const PostEditHeaderContainer = styled.div`
  ${tw`px-4 flex justify-between`}
`

const PostEditHeader = ({ onClickSubmitButtn }: PostEditHeader) => {
  const navigate = useNavigate()
  return (
    <PostEditHeaderContainer>
      <button
        onClick={() => navigate(-1)}
        className="w-fit my-2 h-[3.125rem]">
        <img src={PrevBrownIcon} />
      </button>
      <h1 className="h-fit my-auto text-[1.4rem] font-semibold">페이지 수정</h1>
      <button onClick={onClickSubmitButtn}>
        <img
          className="w-8 h-8 mr-8"
          src={EditIcon}
          alt="edit"
        />
      </button>
    </PostEditHeaderContainer>
  )
}

export default PostEditHeader
