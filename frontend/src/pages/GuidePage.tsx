const guideSteps = [
  { number: '01', title: '요청 주소 입력', description: '테스트할 API 엔드포인트의 전체 URL을 입력합니다.' },
  { number: '02', title: 'HTTP 메서드 선택', description: 'GET, POST, PUT, PATCH, DELETE 중 요청 방식을 선택합니다.' },
  { number: '03', title: '응답 확인', description: '상태 코드, 응답 시간, 반환된 데이터를 한 화면에서 확인합니다.' },
]

export function GuidePage() {
  return (
    <section className="page-section guide-page">
      <div className="container">
        <div className="page-hero"><span className="eyebrow">GETTING STARTED</span><h1>사용 가이드</h1><p>APILAB의 API 테스트 기능을 빠르게 시작하는 방법입니다.</p></div>
        <div className="guide-steps">{guideSteps.map((step) => <article key={step.number}><span>{step.number}</span><h2>{step.title}</h2><p>{step.description}</p></article>)}</div>
        <div className="guide-note"><strong>요청이 실패하나요?</strong><p>브라우저 보안 정책에 따라 대상 서버의 CORS 설정이 필요합니다. 인증이 필요한 API는 추후 헤더 입력 기능을 통해 지원할 예정입니다.</p></div>
      </div>
    </section>
  )
}
