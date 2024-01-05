import { useState } from 'react'
import NotificationModal from './NotificationModal'

const Notifications = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div>
      <button onClick={toggleModal}>알림 보기</button>
      <NotificationModal
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </div>
  )
}

export default Notifications
