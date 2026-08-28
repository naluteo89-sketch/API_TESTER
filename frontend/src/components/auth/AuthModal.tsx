import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import type { AuthUser } from '../../auth/auth-context'
import { apiFetch, apiUrl } from '../../lib/api'

type Props = { mode: 'login' | 'signup'; onClose: () => void; onAuthenticated: (user: AuthUser) => void }

export function AuthModal({ mode, onClose, onAuthenticated }: Props) {
  const isSignup = mode === 'signup'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const googleUrl = import.meta.env.VITE_GOOGLE_SSO_URL || apiUrl('/oauth2/authorization/google')
  const kakaoUrl = import.meta.env.VITE_KAKAO_SSO_URL || apiUrl('/oauth2/authorization/kakao')
  const authUrl = isSignup
    ? '/api/auth/signup'
    : '/api/auth/login'

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKeyDown) }
  }, [onClose])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
    setIsError(false)

    if (isSignup && password !== passwordConfirm) {
      setMessage('비밀번호가 서로 일치하지 않습니다.')
      setIsError(true)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await apiFetch(authUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isSignup ? { name, email, password } : { email, password }),
      })
      const data = await response.json().catch(() => null) as { message?: string; user?: AuthUser } | null
      if (!response.ok) throw new Error(data?.message || (isSignup ? '회원가입에 실패했습니다.' : '로그인에 실패했습니다.'))
      if (!data?.user) throw new Error('서버에서 사용자 정보를 받지 못했습니다.')

      setMessage(data?.message || (isSignup ? '회원가입이 완료되었습니다.' : '로그인되었습니다.'))
      onAuthenticated(data.user)
      onClose()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '요청을 처리하지 못했습니다.')
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
        <button className="auth-modal__close" type="button" aria-label="팝업 닫기" onClick={onClose}>×</button>
        <div className="auth-modal__logo"><span className="logo__mark" aria-hidden="true"><span /><span /></span></div>
        <h2 id="auth-title">{isSignup ? 'APILAB 시작하기' : '다시 만나서 반가워요'}</h2>
        <p>{isSignup ? '이메일 또는 소셜 계정으로 가입하세요.' : '이메일 또는 소셜 계정으로 로그인하세요.'}</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && <label>이름<input type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="이름을 입력하세요" required /></label>}
          <label>이메일<input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" required /></label>
          <label>비밀번호<input type="password" autoComplete={isSignup ? 'new-password' : 'current-password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="8자 이상 입력하세요" minLength={8} required /></label>
          {isSignup && <label>비밀번호 확인<input type="password" autoComplete="new-password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} placeholder="비밀번호를 다시 입력하세요" minLength={8} required /></label>}
          {message && <p className={isError ? 'auth-form__message is-error' : 'auth-form__message is-success'} role="status">{message}</p>}
          <button className="button button--primary auth-form__submit" type="submit" disabled={isSubmitting}>{isSubmitting ? '처리 중...' : isSignup ? '이메일로 회원가입' : '이메일로 로그인'}</button>
        </form>

        <div className="auth-divider"><span>또는</span></div>
        <div className="sso-buttons">
          <a className="sso-button sso-button--google" href={googleUrl}><span aria-hidden="true">G</span>Google로 {isSignup ? '가입하기' : '로그인'}</a>
          <a className="sso-button sso-button--kakao" href={kakaoUrl}><span aria-hidden="true">●</span>카카오로 {isSignup ? '가입하기' : '로그인'}</a>
        </div>
        <small>{isSignup ? '가입하면 APILAB의 이용약관과 개인정보처리방침에 동의하게 됩니다.' : '인증 정보는 암호화된 연결을 통해 전송됩니다.'}</small>
      </section>
    </div>
  )
}
