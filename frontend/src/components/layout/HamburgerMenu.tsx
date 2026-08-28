import type { AuthUser } from '../../auth/auth-context'
import { Gnb } from './Gnb'

type Props = { isOpen: boolean; user: AuthUser | null; isAuthLoading: boolean; onToggle: () => void; onLogin: () => void; onSignup: () => void; onLogout: () => void }

export function HamburgerMenu({ isOpen, user, isAuthLoading, onToggle, onLogin, onSignup, onLogout }: Props) {
  return (
    <div className="mobile-menu">
      <button className="hamburger" type="button" aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={isOpen} onClick={onToggle}>
        <span /><span /><span />
      </button>
      {isOpen && (
        <div className="mobile-menu__panel">
          <Gnb mobile />
          <div className="mobile-menu__auth">
            {user ? <><span className="mobile-menu__user">{user.name}님<br /><small>{user.email}</small></span><button className="button button--ghost" type="button" onClick={onLogout}>로그아웃</button></> : !isAuthLoading && <><button className="button button--ghost" type="button" onClick={onLogin}>로그인</button><button className="button button--primary" type="button" onClick={onSignup}>회원가입</button></>}
          </div>
        </div>
      )}
    </div>
  )
}
