import { create } from 'zustand'

type ModalState = {
  isLogin: boolean
  isOpen: boolean
  updateIsUserLogin: (newIsLogin: boolean) => void
  toggleModal: () => void
  openModal: () => void
  closeModal: () => void
}

export const useAuthModalStore = create<ModalState>((set) => ({
  isLogin: false,
  isOpen: false,
  updateIsUserLogin: (newIsLogin: boolean) => set({ isLogin: newIsLogin }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  openModal: () => set({ isOpen: true }),
  closeModal: () => {
    set({ isOpen: false })
  }
}))
