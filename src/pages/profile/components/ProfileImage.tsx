import tw, { styled } from 'twin.macro'

import NoProfileThumbnailIcon from '@/components/profile-images/NoProfileThumbnailIcon'

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full w-32 h-32`}
`

interface ProfileImageProps {
  imgSrc?: string
  children?: React.ReactNode
}

const ProfileImage = ({ imgSrc, children }: ProfileImageProps) => {
  return (
    <ProfileImageWrapper>
      {imgSrc && (
        <img
          src={imgSrc}
          alt="profile"
          className="w-full h-full rounded-full object-cover z-10 bg-white"
        />
      )}
      {!imgSrc && (
        <NoProfileThumbnailIcon className="w-full h-full rounded-full text-[#ddd] bg-[#fff]" />
      )}
      {children}
    </ProfileImageWrapper>
  )
}

export default ProfileImage
