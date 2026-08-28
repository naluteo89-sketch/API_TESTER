export type Post = {
  slug: string
  category: 'development' | 'api' | 'questions' | 'updates'
  categoryLabel: string
  title: string
  excerpt: string
  author: string
  date: string
  views: number
  body?: string
}

export const temporaryPosts: Post[] = [
  { slug: 'rest-api-design-checklist', category: 'api', categoryLabel: 'API 활용', title: 'REST API를 설계할 때 놓치기 쉬운 5가지', excerpt: '일관된 엔드포인트와 응답 구조를 만들기 위한 실무 기준을 살펴봅니다.', author: '김개발', date: '2026.08.28', views: 128 },
  { slug: 'frontend-api-errors', category: 'development', categoryLabel: '개발 이야기', title: '프론트엔드에서 API 오류를 다루는 방법', excerpt: '사용자 경험을 해치지 않으면서 오류 상태를 명확하게 전달하는 패턴을 정리했습니다.', author: '이코드', date: '2026.08.27', views: 96 },
  { slug: 'community-open', category: 'updates', categoryLabel: '업데이트', title: 'APILAB 커뮤니티를 시작합니다', excerpt: 'API를 만들고 사용하는 사람들의 경험과 질문을 자유롭게 나눠보세요.', author: 'APILAB', date: '2026.08.26', views: 214 },
  { slug: 'cors-question', category: 'questions', categoryLabel: '질문과 답변', title: '브라우저 API 요청에서 CORS 오류가 발생해요', excerpt: '개발 환경과 운영 환경에서 CORS 문제를 해결하는 방법을 함께 찾아봅니다.', author: '박질문', date: '2026.08.25', views: 73 },
  { slug: 'fetch-timeout', category: 'api', categoryLabel: 'API 활용', title: 'Fetch 요청에 타임아웃 적용하기', excerpt: 'AbortController를 이용해 안전하게 요청 시간을 제한하는 방법입니다.', author: '최프론트', date: '2026.08.24', views: 85 },
  { slug: 'typescript-response', category: 'development', categoryLabel: '개발 이야기', title: 'TypeScript로 API 응답 모델링하기', excerpt: '런타임 데이터와 타입 선언 사이의 간극을 줄이는 설계 방식을 소개합니다.', author: '정타입', date: '2026.08.23', views: 147 },
]

export const categoryInfo = {
  development: { label: '개발 이야기', description: '개발 과정에서 얻은 경험과 생각을 나눕니다.' },
  api: { label: 'API 활용', description: 'API 설계와 연동에 필요한 실용적인 정보를 공유합니다.' },
  questions: { label: '질문과 답변', description: '막히는 부분을 질문하고 함께 해결합니다.' },
  updates: { label: '업데이트', description: 'APILAB의 새로운 소식과 변경 사항입니다.' },
} as const
