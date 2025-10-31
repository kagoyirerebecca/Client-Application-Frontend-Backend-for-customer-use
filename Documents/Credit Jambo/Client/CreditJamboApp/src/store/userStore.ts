import { create } from 'zustand';

interface UserStore {
  user: any | null;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
