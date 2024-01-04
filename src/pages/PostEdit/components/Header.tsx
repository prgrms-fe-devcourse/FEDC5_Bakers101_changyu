import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'

import PrevBrownIcon from '@/assets/icons/prev_brown.svg'
import EditIcon from '@/assets/icons/edit.svg'

type PostEditHeader = {
  onClickSubmitButtn: () => void
}

const PostEditHeaderContainer = styled.div`
  ${tw`px-4 flex justify-between`}
`

const PostEditHeader = ({ onClickSubmitButtn }: PostEditHeader) => {
  return (
    <PostEditHeaderContainer>
      <Link
        to="/"
        className="w-screen my-2 h-[3.125rem]">
        <img src={PrevBrownIcon} />
      </Link>
      <button onClick={onClickSubmitButtn}>
        <img
          src={EditIcon}
          alt="edit"
        />
      </button>
    </PostEditHeaderContainer>
  )
}

export default PostEditHeader
