# Frontend

OpenAPI GUI Previewer의 프론트엔드 프로젝트입니다.

## 실행 방법

```bash
npm install
cp .env.example .env
npm run dev
```

Windows PowerShell에서는 `Copy-Item .env.example .env`를 사용합니다.

## SSO 설정

`.env`에서 백엔드 OAuth 시작 주소를 설정합니다.

```env
VITE_GOOGLE_SSO_URL=http://localhost:8080/oauth2/authorization/google
VITE_KAKAO_SSO_URL=http://localhost:8080/oauth2/authorization/kakao
VITE_LOGIN_URL=http://localhost:8080/api/auth/login
VITE_SIGNUP_URL=http://localhost:8080/api/auth/signup
VITE_POSTS_API_URL=http://localhost:8080/api/posts
```

일반 로그인과 회원가입은 JSON 요청을 전송하며 세션 쿠키를 사용할 수 있도록 `credentials: include`로 구성되어 있습니다. Google과 카카오 개발자 콘솔의 앱 등록, OAuth 키, 콜백 처리 및 사용자 세션 생성은 백엔드에서 구성해야 합니다.

게시글 API가 한 개 이상의 글을 반환하면 실제 글만 표시합니다. API가 비어 있거나 연결되지 않은 동안에는 임시 예시 글이 표시됩니다. 응답은 배열, `{ "content": [] }`, `{ "posts": [] }` 형식을 지원합니다.

## 명령어

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run lint`: 정적 분석
- `npm run preview`: 프로덕션 빌드 미리보기
