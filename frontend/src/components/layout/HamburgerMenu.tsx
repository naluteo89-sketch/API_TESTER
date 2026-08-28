import { Gnb } from './Gnb'

type Props = { isOpen: boolean; onToggle: () => void }

export function HamburgerMenu({ isOpen, onToggle }: Props) {
  return (
    <div className="mobile-menu">
      <button className="hamburger" type="button" aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={isOpen} onClick={onToggle}>
        <span /><span /><span />
      </button>
      {isOpen && (
        <div className="mobile-menu__panel">
          <Gnb mobile />
          <button className="button button--primary mobile-menu__login" type="button">로그인</button>
        </div>
      )}
    </div>
  )
}
