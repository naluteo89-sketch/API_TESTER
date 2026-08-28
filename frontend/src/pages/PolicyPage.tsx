type Props = { type: 'terms' | 'privacy' }

export function PolicyPage({ type }: Props) {
  const isPrivacy = type === 'privacy'
  return (
    <section className="page-section policy-page">
      <div className="container page-copy">
        <span className="eyebrow">APILAB POLICY</span><h1>{isPrivacy ? '개인정보처리방침' : '이용약관'}</h1><p className="page-copy__date">시행일: 2026년 8월 28일</p>
        <h2>1. 목적</h2><p>{isPrivacy ? 'APILAB은 서비스 제공에 필요한 최소한의 개인정보만 처리하며 이용자의 정보를 안전하게 보호합니다.' : '본 약관은 APILAB 서비스의 이용 조건과 이용자 및 운영자의 권리와 의무를 규정합니다.'}</p>
        <h2>2. 서비스 이용</h2><p>이용자는 관련 법령과 서비스 정책을 준수해야 하며, 다른 이용자의 정상적인 서비스 이용을 방해해서는 안 됩니다.</p>
        <h2>3. 문의</h2><p>정책과 관련한 문의는 문의하기 페이지를 통해 접수할 수 있습니다.</p>
      </div>
    </section>
  )
}
