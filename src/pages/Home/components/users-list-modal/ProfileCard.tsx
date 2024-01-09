import NoProfileThumbnailIcon from '@/pages/search/components/NoProfileThumbnailIcon'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

interface ProfileCardProps {
  id: string
  fullName: string
  profileImage?: string
}

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full w-20 h-20`}
`

const ProfileCard = ({ id, fullName, profileImage }: ProfileCardProps) => {
  return (
    <Link to={`/profile/${id}`} className="w-full h-full">
    <Container>
      <ProfileImageWrapper>
        {profileImage && (
          <img
            src={profileImage}
            alt="프로필 이미지"
            className="w-full h-full rounded-full object-cover z-10 bg-white"
          />
        )}
        {!profileImage && (
          <NoProfileThumbnailIcon className="w-full h-full rounded-full text-[#ddd] bg-[#fff]" />
        )}
      </ProfileImageWrapper>
      <div className='text-xs'>{fullName}</div>
    </Container>
    </Link>
  )
}

export default ProfileCard
