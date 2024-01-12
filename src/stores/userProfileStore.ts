import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  profile: User | null
  setProfile: (user: User | null) => void
}

export const useProfileStore = create<State>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (user: User | null) => {
        set({ profile: user })
      }
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
