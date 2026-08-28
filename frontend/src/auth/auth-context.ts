import { createContext, useContext } from 'react'

export type AuthUser = {
  id: number
  name: string
  email: string
}

export type AuthContextValue = {
  user: AuthUser | null
  isAuthLoading: boolean
  setAuthenticatedUser: (user: AuthUser) => void
  refreshUser: () => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth는 AuthProvider 안에서 사용해야 합니다.')
  return context
}

