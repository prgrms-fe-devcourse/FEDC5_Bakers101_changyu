import FollowIcon from '../FollowIcon'

interface FollowButtonProps {
  isFilled?: boolean
  onClick: () => void
}

const FollowButton = ({ isFilled, onClick }: FollowButtonProps) => {
  return (
    <button
      className="w-5 h-5"
      onClick={onClick}>
      <FollowIcon
        fill={isFilled ? '#FF777F' : 'none'}
        className="w-full h-full"
      />
    </button>
  )
}

export default FollowButton
