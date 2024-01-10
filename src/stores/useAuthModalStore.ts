import { create } from 'zustand'

type ModalState = {
  isOpen: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useAuthModalStore = create<ModalState>((set) => ({
  isOpen: false,
  toggleModal: () => set(state => ({ isOpen: !state.isOpen })),
  openModal: () => set({ isOpen: true }),
  closeModal: () => {
    set({ isOpen: false });
  }
}))
