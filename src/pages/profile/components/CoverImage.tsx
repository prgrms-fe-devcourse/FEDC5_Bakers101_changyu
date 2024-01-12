import tw, { styled } from 'twin.macro'

const CoverImageWrapper = styled.div`
  ${tw`relative h-64`}
`

interface CoverImageProps {
  imgSrc?: string
  children?: React.ReactNode
}

const CoverImage = ({ imgSrc, children }: CoverImageProps) => {
  return (
    <CoverImageWrapper>
      {imgSrc && (
        <img
          src={imgSrc}
          alt="profile"
          className="w-full h-full object-cover p-0 rounded-none brightness-50"
        />
      )}
      {!imgSrc && <div className="w-full h-full bg-[#eaeaea]"></div>}
      {children}
    </CoverImageWrapper>
  )
}

export default CoverImage
