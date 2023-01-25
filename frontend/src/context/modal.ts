import { create } from "zustand";

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export const useModal = create<ModalProps>((set, get) => ({
  isOpen: false,
  toggle: () => {
    set((state) => ({ ...state, isOpen: !state.isOpen }));
  },
}));
