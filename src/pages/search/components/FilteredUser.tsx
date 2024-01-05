import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import NoProfileThumbnailIcon from './NoProfileThumbnailIcon'

interface FilteredUserProps {
  id: string
  image?: string
  fullName: string
  email: string
  isHidden?: boolean
}

const Container = styled.div(({ isHidden }) => [
  !isHidden && tw`flex items-center gap-3`,
  isHidden && tw`w-fit flex flex-col justify-center items-center gap-3`
])

const FilteredUser = ({
  id,
  image,
  fullName,
  email,
  isHidden
}: FilteredUserProps) => {
  return (
    // TODO: 추후 라우터를 이용하여 해당 유저의 프로필 페이지로 이동하는 기능 추가
    <Link to={`/profile/${id}`}>
      <Container isHidden={isHidden}>
        <aside className="py-2 px-2">
          <div className="border border-[#5a5a5a28] rounded-full overflow-hidden w-[75px] h-[75px]">
            {image === undefined && (
              <NoProfileThumbnailIcon className="w-full h-full text-[#ddd]" />
            )}
            {image && (
              <img
                src={image}
                alt="프로필 이미지"
                className="w-full h-full rounded-full"
              />
            )}
          </div>
        </aside>
        <aside>
          <div className={isHidden ? 'text-xs' : 'font-semibold text-lg'}>
            {fullName}
          </div>
          {!isHidden && <div className="text-xs text-[#a9a9a9]">{email}</div>}
        </aside>
      </Container>
    </Link>
  )
}

export default FilteredUser
