import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div><Logo /><p>개발자와 API를 더 가깝게 연결합니다.</p></div>
        <div className="footer__links"><a href="/">이용약관</a><a href="/">개인정보처리방침</a><a href="/">문의하기</a></div>
        <small>© 2026 APILAB. All rights reserved.</small>
      </div>
    </footer>
  )
}
