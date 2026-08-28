import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { apiFetch } from '../lib/api'
import { AuthContext } from './auth-context'
import type { AuthUser } from './auth-context'

async function loadAuthenticatedUser(): Promise<AuthUser | null> {
  const response = await apiFetch('/api/auth/me')
  if (response.status === 401) return null
  if (!response.ok) throw new Error('사용자 정보를 불러오지 못했습니다.')
  return response.json() as Promise<AuthUser>
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  const refreshUser = useCallback(async () => {
    try {
      setUser(await loadAuthenticatedUser())
    } catch {
      setUser(null)
    } finally {
      setIsAuthLoading(false)
    }
  }, [])

  useEffect(() => {
    let active = true
    loadAuthenticatedUser()
      .then((loadedUser) => { if (active) setUser(loadedUser) })
      .catch(() => { if (active) setUser(null) })
      .finally(() => { if (active) setIsAuthLoading(false) })
    return () => { active = false }
  }, [])

  const logout = useCallback(async () => {
    const response = await apiFetch('/api/auth/logout', { method: 'POST' })
    if (!response.ok) throw new Error('로그아웃하지 못했습니다.')
    setUser(null)
  }, [])

  const value = useMemo(() => ({
    user,
    isAuthLoading,
    setAuthenticatedUser: setUser,
    refreshUser,
    logout,
  }), [user, isAuthLoading, refreshUser, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

