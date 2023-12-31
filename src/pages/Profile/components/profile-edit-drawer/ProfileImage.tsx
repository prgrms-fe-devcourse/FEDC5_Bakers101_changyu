import tw, { styled } from 'twin.macro'
import EditIcon from '../EditIcon'

const ProfileImageWrapper = styled.div`
  ${tw`relative overflow-hidden rounded-full`}
`

function ProfileImage() {
  return (
    <ProfileImageWrapper>
      <img
        src="https://res.cloudinary.com/learnprogrammers/image/upload/v1703813104/user/c95c4575-3d7b-4b77-8eef-64a0c8567cb3.png"
        alt="profile"
        className="w-32 h-32 rounded-full object-cover z-10 bg-white"
      />
      <button className="absolute -bottom-12 w-full h-20 flex justify-center bg-[#000]/30 rounded-b-full">
        <EditIcon className="w-5 h-5 mt-1 text-[#fff]" />
      </button>
    </ProfileImageWrapper>
  )
}

export default ProfileImage
