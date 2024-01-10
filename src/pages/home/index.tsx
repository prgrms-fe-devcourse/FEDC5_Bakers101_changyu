import { useState } from 'react'
import ChannelSelectionModal from './components/channel-selections-modal'
import PostList from './components/post/PostList'
import HomeHeader from './components/header'
import HomeBottomNavBar from './components/bottom-navbar'

type nowChannelType = {
  name: string
  id?: string
}

const Home = () => {
  const [isChannelSelectionsModalOpen, setIsChannelSelectionsModalOpen] =
    useState(false)
  const [nowChannel, setNowChannel] = useState<nowChannelType>({
    name: '전체 채널',
    id: undefined
  })

  return (
    <div className="w-11/12 mx-auto pb-5">
      <HomeHeader
        selectedChannel={nowChannel.name}
        onClickChannelList={() => {
          setIsChannelSelectionsModalOpen((isOpen) => !isOpen)
        }}
      />
      {isChannelSelectionsModalOpen && (
        <ChannelSelectionModal
          setNowChannel={setNowChannel}
          setIsChannelSelectionsModalOpen={setIsChannelSelectionsModalOpen}
        />
      )}
      <div>
        <PostList
          title={nowChannel.name}
          id={nowChannel.id}
        />
        <HomeBottomNavBar />
      </div>
    </div>
  )
}

export default Home
