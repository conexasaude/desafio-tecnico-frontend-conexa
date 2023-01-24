import { create } from "zustand";
import { api } from "../config/axios";
import { loginProps } from "../types/auth";

interface UserProps {
  name: string;
  setName: (name: string) => void;
  login: (data: loginProps) => Promise<string>;
  logout: () => void;
}

export const useAuth = create<UserProps>((set) => ({
  name: localStorage.getItem("name"),
  setName: (name) =>
    set((state) => ({
      ...state,
      name,
    })),
  login: async (data) => {
    const res = await api.post("/login", { ...data });

    if (res.status == 200) {
      localStorage.setItem("bearer", res.data.token);
      localStorage.setItem("name", res.data.name);

      set((state) => ({ ...state, name: res.data.name }));
      return res.data.name;
    }
  },
  logout: () => {
    localStorage.setItem("bearer", "");
    set((state) => ({ ...state, name: "" }));
  },
}));
