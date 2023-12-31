import tw, { styled } from 'twin.macro'
import { useState } from 'react'
import DrawerSide from './DrawerSide'

const DrawerContainer = styled.div``

const DrawerControl = styled.input``

const DrawerContent = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`

function Drawer() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DrawerContainer className="drawer drawer-end">
      <DrawerControl
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <DrawerContent className="drawer-content">
        {/* Page content here -> Profile Page */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </DrawerContent>
      <DrawerSide />
    </DrawerContainer>
  )
}

export default Drawer
