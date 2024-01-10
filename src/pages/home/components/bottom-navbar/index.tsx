import { useState } from 'react'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import { useProfileStore } from '@/stores/userProfileStore'
import { useAuthModalStore } from '@/stores/useAuthModalStore'

import WriteIcon from '@/assets/icons/write.svg'
import UserListIcon from '@/assets/icons/userlist.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import ScrollTopIcon from '@/assets/icons/scrollTop.svg'
import Modal from '@/pages/home/components/users-list-modal/Modal'

const HomeBottomNavBarContainer = styled.div`
  ${tw`fixed left-1/2 transform -translate-x-1/2 bottom-4 flex z-10 bg-white w-56 h-12 justify-evenly rounded-full shadow-lg`}
`

const HomeBottomNavBar = () => {
  const { profile } = useProfileStore()
  const [isUsersListModalOpen, setIsUsersListModalOpen] = useState(false)
  const {isLogin,openModal} = useAuthModalStore()

  const handleUsersListModal = () => {
    setIsUsersListModalOpen((prev) => !prev)
  }

  const checkingLogin= (event : React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLogin)
    {
      event.preventDefault();
      openModal()
    }
  }

  return (
    <>
      <HomeBottomNavBarContainer>
        <Link
          onClick={checkingLogin}
          to={`/profile/${profile?._id}`}
          className="h-fit my-auto">
          <img
            className="w-5 h-5"
            src={ProfileIcon}
          />
        </Link>
        <button onClick={handleUsersListModal}>
          <img
            className="w-7 h-7 my-auto"
            src={UserListIcon}
          />
        </button>
        <button>
          <img
            className="w-7 h-7 my-auto"
            src={ScrollTopIcon}
          />
        </button>
        <Link
          to="/post-creation"
          onClick ={checkingLogin}
          className="h-fit my-auto">
          <img
            className="w-7 h-6"
            src={WriteIcon}
          />
        </Link>
      </HomeBottomNavBarContainer>
      <Modal
        isOpen={isUsersListModalOpen}
        onToggle={handleUsersListModal}
      />
    </>
  )
}
export default HomeBottomNavBar
