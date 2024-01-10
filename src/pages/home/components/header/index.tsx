import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import useModal from '@/hooks/useModal'

import Notifications from '@/components/notifications'

import NotificationIcon from '@/assets/icons/notification.svg'
import SearchIcon from '@/assets/icons/search.svg'
import TriangleIcon from '@/assets/icons/triangle.svg'

const HomeHeaderContainer = styled.div`
  ${tw`flex justify-between items-center my-6`}
`

const HomeHeaderButtonsWrapper = styled.div`
  ${tw`flex gap-3 h-fit`}
`

const ChannelSelectButtonsWrapper = styled.div`
  ${tw`flex gap-2`}
`

type HomeHeaderProps = {
  selectedChannel: string
  onClickChannelList: () => void
}
const HomeHeader = ({
  selectedChannel,
  onClickChannelList
}: HomeHeaderProps) => {

  const { isOpen, toggleModal } = useModal()

  return (
    <HomeHeaderContainer>
      <ChannelSelectButtonsWrapper>
        <button
          className="flex gap-2"
          onClick={onClickChannelList}>
          <p className="text-[#957969] text-[1.375rem] font-bold">
            {selectedChannel}
          </p>
          <img
            className="h-fit my-[0.6rem]"
            src={TriangleIcon}
          />
        </button>
      </ChannelSelectButtonsWrapper>
      <HomeHeaderButtonsWrapper>
        <Link
          to="/search"
          className="flex items-center">
          <button>
            <img src={SearchIcon} />
          </button>
        </Link>
        <button onClick={toggleModal}>
          <img src={NotificationIcon} />
        </button>
        <Notifications
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      </HomeHeaderButtonsWrapper>
    </HomeHeaderContainer>
  )
}

export default HomeHeader
