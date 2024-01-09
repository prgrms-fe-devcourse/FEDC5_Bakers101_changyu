import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import TabItem from './TabItem'
import TabContent from './TabContent'
import getAllUsers from '@/apis/user/getAllUsers'
import getOnlineUsers from '@/apis/user/getOnlineUsers'

interface UsersListProps {
  isOpen: boolean
  onToggle: () => void
}

const ModalContainer = styled.div(({ isOpen }) => [
  tw`modal modal-bottom`,
  isOpen && tw`modal-open`
])

const TabList = styled.div`
  ${tw`tabs tabs-lifted tabs-lg`}
`

const ModalBackdrop = styled.form`
  ${tw`modal-backdrop bg-[#000]/20`}
`

const Modal = ({ isOpen, onToggle }: UsersListProps) => {
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [onlineUsers, setOnlineUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data: User[] = await getAllUsers({})
      setAllUsers(data)
    }

    const fetchOnlineUsers = async () => {
      const data: User[] = await getOnlineUsers()
      setOnlineUsers(data)
    }
    fetchAllUsers()
    fetchOnlineUsers()
  }, [])

  return (
    <ModalContainer
      id="modal"
      isOpen={isOpen}>
      <div className="modal-box w-full h-96 p-0">
        <TabList role="tablist">
          <TabItem
            title={'모든 사용자'}
            checked
          />
          <TabContent users={allUsers} />
          <TabItem title={'접속 중인 사용자'} />
          <TabContent users={onlineUsers} />
        </TabList>
      </div>
      <ModalBackdrop method="dialog">
        <button onClick={onToggle}>close</button>
      </ModalBackdrop>
    </ModalContainer>
  )
}

export default Modal
