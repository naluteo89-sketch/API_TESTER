import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div><Logo /><p>개발자와 API를 더 가깝게 연결합니다.</p></div>
        <div className="footer__links"><Link to="/terms">이용약관</Link><Link to="/privacy">개인정보처리방침</Link><Link to="/contact">문의하기</Link></div>
        <small>© 2026 APILAB. All rights reserved.</small>
      </div>
    </footer>
  )
}
