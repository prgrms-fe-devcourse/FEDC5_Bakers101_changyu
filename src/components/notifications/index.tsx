import NotificationModal from './NotificationModal'

type NotificationsProps = {
  isOpen: boolean
  onClose: () => void
}

const Notifications = ({ isOpen, onClose }: NotificationsProps) => {
  return (
    <NotificationModal
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}

export default Notifications
