import { create } from 'zustand'

interface AdminStore {
  isAdminOpen: boolean
  isAuthenticated: boolean
  activeTab: string
  toggleAdmin: () => void
  openAdmin: () => void
  closeAdmin: () => void
  setAuthenticated: (val: boolean) => void
  setActiveTab: (tab: string) => void
  logout: () => void
}

export const useAdminStore = create<AdminStore>((set) => ({
  isAdminOpen: false,
  isAuthenticated: false,
  activeTab: 'overview',
  toggleAdmin: () =>
    set((state) => ({ isAdminOpen: !state.isAdminOpen })),
  openAdmin: () => set({ isAdminOpen: true }),
  closeAdmin: () => set({ isAdminOpen: false }),
  setAuthenticated: (val: boolean) => set({ isAuthenticated: val }),
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  logout: () => set({ isAuthenticated: false, isAdminOpen: false }),
}))
