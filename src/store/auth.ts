import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { AuthStore } from "../types/store";

export const useAuthStore = createStore(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () =>
        set({
          isLoggedIn: false,
          id: null,
          nickname: null,
          email: null,
          userName: null,
        }),
      id: null,
      setId: (id: string) => set({ id: id }),
      userName: null,
      setUserName: (userName: string) => set({ userName: userName }),
      nickname: null,
      setNickname: (nickname: string) => set({ nickname: nickname }),
      email: null,
      setEmail: (email: string) => set({ email: email }),
    }),
    {
      name: "userInfoStorage",
    }
  )
);
