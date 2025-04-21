
import create from 'zustand';
import User from '../models/User';

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData ? User.fromJSON(userData) : null }),
  logout: () => set({ user: null })
}));
