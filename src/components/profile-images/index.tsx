import tw, { styled } from 'twin.macro'
import NoProfileThumbnailIcon from './NoProfileThumbnailIcon'

type ProfileImageProps = {
  profileImage?: string
}

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full w-12 h-12 md:w-20 md:h-20 mb-2`}
`

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return (
    <>
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
    </>
  )
}

export default ProfileImage
