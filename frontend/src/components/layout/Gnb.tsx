const navigationItems = ['홈', 'API 탐색', '커뮤니티', '가이드']

export function Gnb({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? 'gnb gnb--mobile' : 'gnb'} aria-label="주요 메뉴">
      {navigationItems.map((item, index) => (
        <a className={index === 0 ? 'is-active' : undefined} href="/" key={item}>{item}</a>
      ))}
    </nav>
  )
}
