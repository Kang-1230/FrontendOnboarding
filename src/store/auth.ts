import { create } from "zustand";

interface authState {
  auths: number;
  increase: (by: number) => void;
}

export const useauthStore = create<authState>()((set) => ({
  auths: 0,
  increase: (by) => set((state) => ({ auths: state.auths + by })),
}));
