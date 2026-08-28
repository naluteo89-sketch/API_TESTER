import { useState } from 'react'
import { AuthModal } from '../auth/AuthModal'
import { Gnb } from './Gnb'
import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null)

  const openAuth = (mode: 'login' | 'signup') => { setIsMenuOpen(false); setAuthMode(mode) }

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <Gnb />
        <div className="header__actions"><button className="button button--ghost" type="button" onClick={() => openAuth('login')}>로그인</button><button className="button button--primary" type="button" onClick={() => openAuth('signup')}>회원가입</button></div>
        <HamburgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((current) => !current)} onLogin={() => openAuth('login')} onSignup={() => openAuth('signup')} />
      </div>
      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />}
    </header>
  )
}
