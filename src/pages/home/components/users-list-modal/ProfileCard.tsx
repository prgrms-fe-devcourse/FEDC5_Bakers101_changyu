import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import ProfileImage from '@/components/profile-images'

interface ProfileCardProps {
  id: string
  fullName: string
  profileImage?: string
}

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`

const ProfileCard = ({ id, fullName, profileImage }: ProfileCardProps) => {
  return (
    <Link
      to={`/profile/${id}`}
      className="w-full h-full">
      <Container>
        <ProfileImage profileImage={profileImage} />
        <div className="text-[10px] md:text-lg">{fullName}</div>
      </Container>
    </Link>
  )
}

export default ProfileCard
