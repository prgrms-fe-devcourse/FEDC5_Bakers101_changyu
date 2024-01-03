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
  return (
    <Container>
      <div className="relative h-full">
        <img
          src={thumbnail}
          alt="썸네일"
        />
        <div className="absolute bottom-3 left-3">
          <div>{title}</div>
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
