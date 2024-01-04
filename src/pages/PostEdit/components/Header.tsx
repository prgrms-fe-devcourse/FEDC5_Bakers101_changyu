import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'
import PrevBrownIcon from '@/assets/icons/prev_brown.svg'

type PostEditHeader = {
  onClickSubmitButtn: () => void
}

const PostEditHeaderContainer = styled.div`
  ${tw`flex justify-between`}
`

const PostEditHeader = ({ onClickSubmitButtn }: PostEditHeader) => {
  return (
    <PostEditHeaderContainer>
      <Link
        to="/"
        className="mx-2 my-2 h-[3.125rem]">
        <img src={PrevBrownIcon} />
      </Link>
      <button onClick={onClickSubmitButtn}>제출</button>
    </PostEditHeaderContainer>
  )
}

export default PostEditHeader
