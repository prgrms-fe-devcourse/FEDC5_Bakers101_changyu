import tw, { styled } from 'twin.macro'
import NoResultIcon from './NoResultIcon'

const Container = styled.section`
  ${tw`flex flex-col justify-center items-center grow pb-40`}
`

const NoResult = () => {
  return (
    <Container>
      <div className='flex flex-col items-center gap-2'>
        <NoResultIcon className='w-10 h-10 text-brand-primary'/>
        <p className='text-xl text-brand-primary'>검색 결과가 없습니다.</p>
      </div>
    </Container>
  )
}

export default NoResult
