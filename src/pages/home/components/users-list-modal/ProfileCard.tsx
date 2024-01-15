import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import NoProfileThumbnailIcon from '@/components/profile-images/NoProfileThumbnailIcon'

interface ProfileCardProps {
  id: string
  fullName: string
  profileImage?: string
}

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full w-12 h-12 md:w-20 md:h-20 mb-2`}
`

const ProfileCard = ({ id, fullName, profileImage }: ProfileCardProps) => {
  return (
    <Link
      to={`/profile/${id}`}
      className="w-full h-full">
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
        <div className="text-[10px] md:text-lg">{fullName}</div>
      </Container>
    </Link>
  )
}

export default ProfileCard
