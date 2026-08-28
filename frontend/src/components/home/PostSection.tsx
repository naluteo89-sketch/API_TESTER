import { Link } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'

export function PostSection() {
  const { posts, isLoading, isTemporary } = usePosts()

  return (
    <section className="posts-section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">COMMUNITY</span><h2>새로운 이야기</h2></div><Link className="section-heading__more" to="/community">전체 게시글 보기 <span aria-hidden="true">→</span></Link></div>
        {isTemporary && !isLoading && <p className="sample-notice">아직 등록된 글이 없어 예시 게시글을 보여드리고 있습니다.</p>}
        <div className="post-grid" aria-busy={isLoading}>
          {isLoading && <p className="posts-loading">게시글을 불러오는 중입니다.</p>}
          {posts.slice(0, 3).map((post) => (
            <article className="post-card" key={post.title}>
              <Link className="post-card__category" to={`/community/${post.category}`}>{post.categoryLabel}</Link>
              <h3><Link to={`/posts/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p>
              <div className="post-card__meta"><span>{post.author}</span><time>{post.date}</time></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
