import NotificationModal from './NotificationModal'

export type NotificationsProps = {
  isOpen: boolean
  toggleModal: () => void
}

const Notifications = ({ isOpen, toggleModal }: NotificationsProps) => {
  return (
    <NotificationModal
      isOpen={isOpen}
      toggleModal={toggleModal}
    />
  )
}

export default Notifications
