import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'

import NotificationList from './NotificationList'
import { updateNotifications } from '@/apis/notifications'
import { NotificationsProps } from './index'

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20`}
`

const ModalContainer = styled.div`
  ${tw`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto p-3 border w-4/5 h-1/2 overflow-y-auto shadow-lg rounded-md bg-white flex flex-col`}
`

const ButtonContainer = styled.div`
  ${tw`flex justify-between items-center sticky top-0 bg-white p-2`}
`

const AllReadCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${tw`mr-2`}
`

const CloseButton = styled.button`
  ${tw`text-2xl font-semibold`}
`

const NotificationModal = ({ isOpen, toggleModal }: NotificationsProps) => {
  const [allRead, setAllRead] = useState(false)


  const handleAllReadChange = async () => {
    try {
      await updateNotifications()
      setAllRead(true)
    } catch (error) {
      console.error('알림 읽음 처리 실패: ', error)
    }
  }

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      toggleModal()
    }
  }

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  useEffect(() => {
    setAllRead(false)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalClick}>
        <ButtonContainer>
          <label>
            <AllReadCheckbox
              checked={allRead}
              onChange={handleAllReadChange}
            />
            모두 읽음
          </label>
          <CloseButton onClick={toggleModal}>&times;</CloseButton>
        </ButtonContainer>
        <NotificationList allRead={allRead} />
      </ModalContainer>
    </ModalOverlay>
  )
}

export default NotificationModal
