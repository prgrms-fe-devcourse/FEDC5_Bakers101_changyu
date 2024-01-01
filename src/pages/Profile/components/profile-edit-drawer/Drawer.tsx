import tw, { styled } from 'twin.macro'
import DrawerSide from './DrawerSide'

const DrawerContainer = styled.div``

const DrawerControl = styled.input``

const DrawerContent = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`

interface DrawerProps {
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

function Drawer({ children, isOpen, onToggle }: DrawerProps) {
  return (
    <DrawerContainer className="drawer drawer-end">
      <DrawerControl
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={onToggle}
      />
      <DrawerContent className="drawer-content">{children}</DrawerContent>
      <DrawerSide onToggle={onToggle} />
    </DrawerContainer>
  )
}

export default Drawer
