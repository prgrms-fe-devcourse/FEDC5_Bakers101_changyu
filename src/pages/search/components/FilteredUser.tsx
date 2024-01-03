import tw, { styled } from 'twin.macro'

interface FilteredUserProps {
  image?: string
  fullName: string
  email: string
}

const Container = styled.div`
  ${tw`flex items-center gap-3`}
`

const FilteredUser = ({ image, fullName, email }: FilteredUserProps) => {
  return (
    // TODO: 추후 라우터를 이용하여 해당 유저의 프로필 페이지로 이동하는 기능 추가
    <Container>
      <aside>
        <div className='rounded-full overflow-hidden w-[75px] h-[75px] border-1 border-[#000]'>
          <img
            src={image}
            alt="프로필 이미지"
            className="w-full h-full rounded-full"
          />
        </div>
      </aside>
      <aside>
        <div className='font-semibold text-lg'>{fullName}</div>
        <div className='text-xs text-[#a9a9a9]'>{email}</div>
      </aside>
    </Container>
  )
}

export default FilteredUser
