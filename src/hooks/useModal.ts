import { useState, useEffect, useCallback } from 'react'

function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleBodyScroll = useCallback(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    handleBodyScroll()
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (isOpen) {
        handleBodyScroll()
      }
    }
  }, [isOpen, handleKeyDown, handleBodyScroll])

  return {
    isOpen,
    toggleModal,
    openModal,
    closeModal
  }
}

export default useModal
