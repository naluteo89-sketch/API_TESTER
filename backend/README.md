# APILAB Backend

Java 21과 Spring Boot 기반의 백엔드 서버입니다.

## 실행

Java 21과 Maven 3.9 이상을 설치한 뒤 저장소 루트에서 실행합니다.

```bash
cd backend
mvn spring-boot:run
```

서버는 기본적으로 `http://localhost:8080`에서 실행됩니다. 프런트엔드는 별도 터미널에서 `npm --prefix frontend run dev`로 실행합니다.

프런트엔드는 `http://localhost:5173`, 백엔드는 `http://localhost:8080`을 사용합니다. 프런트엔드 API 주소는 `frontend/.env`의 `VITE_API_BASE_URL`로 변경할 수 있고, 백엔드는 `CORS_ALLOWED_ORIGINS`에 등록된 프런트엔드 주소만 허용합니다.

## 주요 API

| Method | Path | 설명 |
| --- | --- | --- |
| `GET` | `/api/posts` | 게시글 목록 (`category` 필터 지원) |
| `GET` | `/api/posts/{slug}` | 게시글 상세 및 조회수 증가 |
| `POST` | `/api/auth/signup` | 이메일 회원가입 및 세션 생성 |
| `POST` | `/api/auth/login` | 이메일 로그인 및 세션 생성 |
| `GET` | `/api/auth/me` | 현재 로그인 사용자 조회 |
| `POST` | `/api/auth/logout` | 세션 로그아웃 |
| `GET` | `/actuator/health` | 서버 상태 확인 |

개발 환경에서는 H2 인메모리 DB를 사용하므로 서버를 재시작하면 회원 데이터가 초기화됩니다. 운영 DB는 환경별 프로필에서 별도로 설정해야 합니다.

허용할 프런트엔드 주소는 `CORS_ALLOWED_ORIGINS` 환경 변수로 바꿀 수 있습니다.
