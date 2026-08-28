import { Link, useParams } from 'react-router-dom'
import { categoryInfo } from '../data/posts'
import { usePosts } from '../hooks/usePosts'

export function BoardPage() {
  const { category } = useParams()
  const { posts, isLoading, isTemporary } = usePosts()
  const info = category && category in categoryInfo ? categoryInfo[category as keyof typeof categoryInfo] : null
  const visiblePosts = info ? posts.filter((post) => post.category === category) : posts

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">COMMUNITY</span>
          <h1>{info?.label ?? '전체 게시글'}</h1>
          <p>{info?.description ?? '개발과 API에 관한 경험, 질문, 새로운 소식을 만나보세요.'}</p>
        </div>
        <div className="board-toolbar">
          <strong>{isLoading ? '게시글을 불러오는 중' : `총 ${visiblePosts.length}개의 글`}</strong>
          <button className="button button--primary" type="button">글쓰기</button>
        </div>
        {isTemporary && !isLoading && <p className="sample-notice sample-notice--board">등록된 글이 생기면 아래 예시 게시글은 자동으로 숨겨집니다.</p>}
        <div className="board-list">
          {visiblePosts.map((post) => (
            <article className="board-item" key={post.slug}>
              <div>
                <Link className="board-item__category" to={`/community/${post.category}`}>{post.categoryLabel}</Link>
                <h2><Link to={`/posts/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.excerpt}</p>
              </div>
              <div className="board-item__meta"><span>{post.author}</span><time>{post.date}</time><span>조회 {post.views}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
