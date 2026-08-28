import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: '홈', to: '/' },
  { label: 'API 탐색', to: '/apis' },
  { label: '커뮤니티', to: '/community' },
  { label: '가이드', to: '/guides' },
]

export function Gnb({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? 'gnb gnb--mobile' : 'gnb'} aria-label="주요 메뉴">
      {navigationItems.map((item) => (
        <NavLink className={({ isActive }) => isActive ? 'is-active' : undefined} end={item.to === '/'} to={item.to} key={item.to}>{item.label}</NavLink>
      ))}
    </nav>
  )
}
