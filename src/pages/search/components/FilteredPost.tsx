import tw, { styled } from 'twin.macro'

interface FilteredPostProps {
  thumbnail?: string
  title: string
  commentsNum: number
  likesNum: number
}

const Container = styled.section`
  ${tw`h-[100px]`}
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
      <div className="relative h-full">
        <img
          src={thumbnail}
          alt="썸네일"
        />
        <div className="absolute">
          <div>{formatTitle(title)}</div>
          <div className="flex items-center gap-2">
            <div>{commentsNum}</div>
            <div>{likesNum}</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FilteredPost
