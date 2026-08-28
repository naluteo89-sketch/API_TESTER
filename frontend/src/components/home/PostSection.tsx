const posts = [
  { category: 'API 활용', title: 'REST API를 설계할 때 놓치기 쉬운 5가지', excerpt: '일관된 엔드포인트와 응답 구조를 만들기 위한 실무 기준을 살펴봅니다.', author: '김개발', date: '2026.08.28' },
  { category: '개발 이야기', title: '프론트엔드에서 API 오류를 다루는 방법', excerpt: '사용자 경험을 해치지 않으면서 오류 상태를 명확하게 전달하는 패턴을 정리했습니다.', author: '이코드', date: '2026.08.27' },
  { category: '업데이트', title: 'APILAB 커뮤니티를 시작합니다', excerpt: 'API를 만들고 사용하는 사람들의 경험과 질문을 자유롭게 나눠보세요.', author: 'APILAB', date: '2026.08.26' },
]

export function PostSection() {
  return (
    <section className="posts-section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">COMMUNITY</span><h2>새로운 이야기</h2></div><a className="section-heading__more" href="/">전체 게시글 보기 <span aria-hidden="true">→</span></a></div>
        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.title}>
              <span className="post-card__category">{post.category}</span>
              <h3><a href="/">{post.title}</a></h3><p>{post.excerpt}</p>
              <div className="post-card__meta"><span>{post.author}</span><time>{post.date}</time></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
