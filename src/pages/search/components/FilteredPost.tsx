import tw, { styled } from 'twin.macro'
import CommentIcon from './CommentIcon'
import { comment } from 'postcss'
import HeartIcon from './HeartIcon'

interface FilteredPostProps {
  thumbnail?: string
  title: string
  commentsNum: number
  likesNum: number
}

const Container = styled.section`
  ${tw`h-[280px]`}
`

const FilteredPost = ({
  thumbnail,
  title,
  commentsNum,
  likesNum
}: FilteredPostProps) => {
  const formatTitle = (title: string) => {
    if (title === '[object FormData]') {
      return 'FormData 형식 오류'
    } else {
      const tmp = JSON.parse(title)
      if (tmp === 'undefined') {
        return title
      } else {
        return tmp.title
      }
    }
  }

  return (
    <Container>
      <div className="relative h-full bg-slate-500 rounded-xl overflow-hidden">
        <img
          src={'src/assets/19.jpg'}
          alt="썸네일"
          className="h-full rounded-xl"
        />
        <div className="absolute w-3/4 bottom-2 left-2 p-3 bg-white/30 backdrop-blur-md rounded-lg">
          <div className="w-full font-bold truncate">{formatTitle(title)}</div>
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1">
              <CommentIcon />
              <span>{commentsNum}</span>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon />
              <span>{likesNum}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FilteredPost
