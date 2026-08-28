import { useState } from 'react'
import { useAuth } from '../../auth/auth-context'
import { AuthModal } from '../auth/AuthModal'
import { Gnb } from './Gnb'
import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null)
  const { user, isAuthLoading, setAuthenticatedUser, logout } = useAuth()

  const openAuth = (mode: 'login' | 'signup') => { setIsMenuOpen(false); setAuthMode(mode) }
  const handleLogout = () => {
    setIsMenuOpen(false)
    void logout().catch(() => window.alert('로그아웃하지 못했습니다. 서버 연결을 확인해 주세요.'))
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <Gnb />
        <div className="header__actions">
          {user ? <><span className="header__user" title={user.email}>{user.name}님</span><button className="button button--ghost" type="button" onClick={handleLogout}>로그아웃</button></> : !isAuthLoading && <><button className="button button--ghost" type="button" onClick={() => openAuth('login')}>로그인</button><button className="button button--primary" type="button" onClick={() => openAuth('signup')}>회원가입</button></>}
        </div>
        <HamburgerMenu isOpen={isMenuOpen} user={user} isAuthLoading={isAuthLoading} onToggle={() => setIsMenuOpen((current) => !current)} onLogin={() => openAuth('login')} onSignup={() => openAuth('signup')} onLogout={handleLogout} />
      </div>
      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onAuthenticated={setAuthenticatedUser} />}
    </header>
  )
}
