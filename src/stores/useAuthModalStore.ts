import { create } from 'zustand'

type ModalState = {
  isLogin: boolean;
  isOpen: boolean;
  setLogin : () => void;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useAuthModalStore = create<ModalState>((set) => ({
  isLogin: false,
  isOpen: false,
  setLogin : () => set({isLogin : true}),
  toggleModal: () => set(state => ({ isOpen: !state.isOpen })),
  openModal: () => set({ isOpen: true }),
  closeModal: () => {
    set({ isOpen: false });
  }
}))
