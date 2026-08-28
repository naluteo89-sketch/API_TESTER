import { Gnb } from './Gnb'

type Props = { isOpen: boolean; onToggle: () => void; onLogin: () => void; onSignup: () => void }

export function HamburgerMenu({ isOpen, onToggle, onLogin, onSignup }: Props) {
  return (
    <div className="mobile-menu">
      <button className="hamburger" type="button" aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={isOpen} onClick={onToggle}>
        <span /><span /><span />
      </button>
      {isOpen && (
        <div className="mobile-menu__panel">
          <Gnb mobile />
          <div className="mobile-menu__auth"><button className="button button--ghost" type="button" onClick={onLogin}>로그인</button><button className="button button--primary" type="button" onClick={onSignup}>회원가입</button></div>
        </div>
      )}
    </div>
  )
}
