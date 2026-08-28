const apiGroups = [
  { icon: '☀', title: '날씨 API', description: '현재 날씨와 지역별 예보 데이터를 확인합니다.', tag: 'Public' },
  { icon: '₩', title: '환율 API', description: '통화별 최신 환율과 기간별 변동을 조회합니다.', tag: 'Finance' },
  { icon: '⌖', title: '지도 API', description: '주소 검색과 좌표 변환 기능을 테스트합니다.', tag: 'Location' },
  { icon: 'Aa', title: '번역 API', description: '텍스트 언어 감지와 번역 요청을 실행합니다.', tag: 'AI' },
]

export function ApiExplorerPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-hero"><span className="eyebrow">API EXPLORER</span><h1>API 탐색</h1><p>자주 사용하는 API 예시를 살펴보고 테스트를 시작해 보세요.</p></div>
        <div className="search-box"><span aria-hidden="true">⌕</span><input type="search" aria-label="API 검색" placeholder="API 이름이나 기능을 검색하세요" /></div>
        <div className="api-catalog">
          {apiGroups.map((api) => <article className="api-card" key={api.title}><div className="api-card__icon">{api.icon}</div><span>{api.tag}</span><h2>{api.title}</h2><p>{api.description}</p><button type="button">테스트하기 →</button></article>)}
        </div>
      </div>
    </section>
  )
}
