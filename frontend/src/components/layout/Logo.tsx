import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="APILAB 홈">
      <span className="logo__mark" aria-hidden="true"><span /><span /></span>
      <span className="logo__text">API<span>LAB</span></span>
    </Link>
  )
}
