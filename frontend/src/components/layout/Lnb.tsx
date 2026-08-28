import { NavLink } from 'react-router-dom'

const categories = [
  { label: '전체', to: '/community' },
  { label: '개발 이야기', to: '/community/development' },
  { label: 'API 활용', to: '/community/api' },
  { label: '질문과 답변', to: '/community/questions' },
  { label: '업데이트', to: '/community/updates' },
]

export function Lnb() {
  return (
    <nav className="lnb" aria-label="게시판 카테고리">
      <div className="container lnb__inner">
        {categories.map((category) => (
          <NavLink className={({ isActive }) => isActive ? 'is-active' : undefined} end={category.to === '/community'} to={category.to} key={category.to}>{category.label}</NavLink>
        ))}
      </div>
    </nav>
  )
}
