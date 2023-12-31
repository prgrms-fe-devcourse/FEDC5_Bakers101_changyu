import tw, { styled } from 'twin.macro'
import EditIcon from '../EditIcon'

const CoverImageWrapper = styled.div`
  ${tw`relative`}
`

function CoverImage() {
  return (
    <CoverImageWrapper>
      <img
        src="https://res.cloudinary.com/learnprogrammers/image/upload/v1703812701/user/9607d5d3-e5a9-4d60-99f7-ba4a01da5d11.jpg"
        alt="profile"
        className="w-full h-64 object-cover p-0 rounded-none brightness-50"
      />
      <button className="absolute bottom-3 right-2">
        <EditIcon className="w-5 h-5 text-[#fff]" />
      </button>
    </CoverImageWrapper>
  )
}

export default CoverImage
