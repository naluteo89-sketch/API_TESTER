import { useState } from 'react'
import type { FormEvent } from 'react'

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
type TestResult = { status: number; statusText: string; elapsed: number; body: string }

export function ApiTester() {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<TestResult | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(''); setResult(null); setIsLoading(true)
    const startedAt = performance.now()
    try {
      const response = await fetch(url, { method })
      const body = await response.text()
      setResult({ status: response.status, statusText: response.statusText, elapsed: Math.round(performance.now() - startedAt), body })
    } catch {
      setError('요청에 실패했습니다. URL과 CORS 설정을 확인해 주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="tester-section">
      <div className="container tester-section__inner">
        <div className="eyebrow">SIMPLE API CLIENT</div>
        <h1>API를 입력하고, 바로 확인하세요.</h1>
        <p className="tester-section__description">복잡한 설정 없이 엔드포인트를 입력해 응답을 빠르게 테스트할 수 있습니다.</p>
        <form className="api-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="method">HTTP 메서드</label>
          <select id="method" value={method} onChange={(event) => setMethod(event.target.value)}>
            {methods.map((item) => <option key={item}>{item}</option>)}
          </select>
          <label className="sr-only" htmlFor="endpoint">API 엔드포인트</label>
          <input id="endpoint" type="url" placeholder="https://api.example.com/users" value={url} onChange={(event) => setUrl(event.target.value)} required />
          <button className="button button--primary api-form__submit" type="submit" disabled={isLoading}>{isLoading ? '요청 중...' : '요청 보내기'}</button>
        </form>
        <p className="tester-section__hint"><span aria-hidden="true">●</span> 브라우저에서 직접 요청하므로 대상 API의 CORS 허용이 필요합니다.</p>
        {(result || error) && (
          <div className="response-panel" aria-live="polite">
            {error ? <p className="response-panel__error">{error}</p> : result && <><div className="response-panel__meta"><strong>{result.status} {result.statusText}</strong><span>{result.elapsed} ms</span></div><pre>{result.body || '(응답 본문 없음)'}</pre></>}
          </div>
        )}
      </div>
    </section>
  )
}
