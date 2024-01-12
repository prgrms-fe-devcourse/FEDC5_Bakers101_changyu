import tw, { styled } from 'twin.macro'
import FireBakeIcon from '@/assets/icons/firebreadicon.svg'

const NonePostContainer = styled.div`
  ${tw`mx-auto transform my-12 translate-y-1/2  transition-all duration-500 ease-in-out`}
`

const NonePost = () => {
  return (
    <NonePostContainer>
      <img
        className="mx-auto"
        src={FireBakeIcon}
        alt="firebakeIcon"
      />
      <p className="font-semibold text-center">
        현재 채널에 존재하는 포스트가 없습니다.
      </p>
      <p className="font-semibold text-center">다른 채널을 이용해주세요.</p>
    </NonePostContainer>
  )
}

export default NonePost
