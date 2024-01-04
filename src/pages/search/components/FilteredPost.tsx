import tw, { styled } from 'twin.macro'
import CommentIcon from './CommentIcon'
import HeartIcon from './HeartIcon'
import { useCallback } from 'react'

interface FilteredPostProps {
  thumbnail?: string
  title: string
  commentsNum: number
  likesNum: number
}

const Container = styled.section`
  ${tw`h-[280px]`}
`

const Wrapper = styled.div`
  ${tw`relative h-full bg-slate-500 rounded-xl overflow-hidden`}
`

const Content = styled.div`
  ${tw`absolute w-3/4 bottom-2 left-2 p-3 bg-white/30 backdrop-blur-md rounded-lg`}
`

const Title = styled.h1`
  ${tw`w-full text-[14px] font-bold truncate`}
`

const Social = styled.div`
  ${tw`flex items-center gap-2 text-xs`}
`

const SocialButton = styled.button`
  ${tw`flex items-center gap-1`}
`

const FilteredPost = ({
  thumbnail,
  title,
  commentsNum,
  likesNum
}: FilteredPostProps) => {
  const formatTitle = useCallback((title: string) => {
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
  }, [])

  return (
    // TODO: 추후 라우터를 이용하여 해당 포스트의 상세 페이지로 이동하는 기능 추가
    <Container>
      <Wrapper>
        <img
          src={'src/assets/19.jpg'}
          alt="썸네일"
          className="h-full rounded-xl"
        />
        <Content>
          <Title>{formatTitle(title)}</Title>
          <Social>
            <SocialButton>
              <CommentIcon />
              <span>{commentsNum}</span>
            </SocialButton>
            <SocialButton>
              <HeartIcon />
              <span>{likesNum}</span>
            </SocialButton>
          </Social>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default FilteredPost
