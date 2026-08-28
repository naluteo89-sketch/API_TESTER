const categories = ['전체', '개발 이야기', 'API 활용', '질문과 답변', '업데이트']

export function Lnb() {
  return (
    <nav className="lnb" aria-label="게시판 카테고리">
      <div className="container lnb__inner">
        {categories.map((category, index) => (
          <a className={index === 0 ? 'is-active' : undefined} href="/" key={category}>{category}</a>
        ))}
      </div>
    </nav>
  )
}
