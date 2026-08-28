import { useState } from 'react'
import { Gnb } from './Gnb'
import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <Gnb />
        <div className="header__actions"><button className="button button--ghost" type="button">로그인</button></div>
        <HamburgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((current) => !current)} />
      </div>
    </header>
  )
}
