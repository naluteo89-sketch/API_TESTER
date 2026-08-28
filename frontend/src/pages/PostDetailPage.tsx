import { Link, Navigate, useParams } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'

export function PostDetailPage() {
  const { slug } = useParams()
  const { posts, isLoading } = usePosts()
  const post = posts.find((item) => item.slug === slug)
  if (isLoading && !post) return <div className="page-loading">게시글을 불러오는 중입니다.</div>
  if (!post) return <Navigate to="/community" replace />

  return (
    <article className="post-detail container">
      <Link className="post-detail__category" to={`/community/${post.category}`}>{post.categoryLabel}</Link>
      <h1>{post.title}</h1>
      <div className="post-detail__meta"><span>{post.author}</span><time>{post.date}</time><span>조회 {post.views}</span></div>
      <div className="post-detail__body">
        {post.body ? (
          <p className="post-detail__content">{post.body}</p>
        ) : (
          <>
            <p>{post.excerpt}</p>
            <h2>일관된 기준에서 시작하기</h2>
            <p>좋은 API는 기능뿐 아니라 사용하는 사람이 예측할 수 있는 구조를 갖습니다. 리소스 이름, 상태 코드, 오류 응답 형식을 프로젝트 전체에서 일관되게 유지하는 것이 출발점입니다.</p>
            <pre><code>{`GET /api/users/42\n200 OK\n{ "id": 42, "name": "APILAB" }`}</code></pre>
            <p>작은 규칙을 문서화하고 팀에서 공유하면 API를 연결하고 유지보수하는 시간이 크게 줄어듭니다.</p>
          </>
        )}
      </div>
      <Link className="button button--ghost post-detail__back" to="/community">목록으로 돌아가기</Link>
    </article>
  )
}
