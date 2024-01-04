import tw, { styled } from 'twin.macro'
import DrawerSide from './DrawerSide'

const DrawerContainer = styled.div`
  ${tw`drawer drawer-end`}
`

const DrawerControl = styled.input`
  ${tw`drawer-toggle`}
`

const DrawerContent = styled.div`
  ${tw`flex flex-col items-center justify-center drawer-content`}
`

interface DrawerProps {
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

const Drawer = ({ children, isOpen, onToggle }: DrawerProps) => {
  return (
    <DrawerContainer>
      <DrawerControl
        id="my-drawer"
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}
      />
      {!isOpen && <DrawerContent>{children}</DrawerContent>}
      <DrawerSide onToggle={onToggle} />
    </DrawerContainer>
  )
}

export default Drawer
