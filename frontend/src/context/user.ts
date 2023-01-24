import { create } from "zustand";

interface UserProps {
  name: string;
  setName: (name: string) => void;
}

export const useUser = create<UserProps>((set) => ({
  name: "",
  setName: (name) =>
    set((state) => ({
      ...state,
      name,
    })),
}));
