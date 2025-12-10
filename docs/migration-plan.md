# Next.js API Routes Migration Plan (Dev Branch)

## 목표

현재 **dev 브랜치**의 axios 기반 API 통신을 Next.js API Routes + fetch 기반으로 마이그레이션합니다.

## 현재 상태 분석 (Dev Branch)

### 프로젝트 정보
- **브랜치**: `dev` (최신 커밋: be3b315)
- **아키텍처**: FSD (Feature-Sliced Design)
- **프레임워크**: Next.js 14 (App Router)
- **상태 관리**: React Query v5 + Zustand
- **현재 HTTP 클라이언트**: axios v1.7.9

### API 엔드포인트 전체 목록 (총 40개)

#### 1. Course APIs (9개)
**위치**: `src/entities/course/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-courses.ts` | GET | `/courses` | `useGetCourses` |
| `get-course.ts` | GET | `/courses/:id` | `useGetCourse` |
| `post-course.ts` | POST | `/courses` | `usePostCourse` |
| `update-course.ts` | PATCH | `/courses/:id` | `useUpdateCourse` |
| `delete-course.ts` | DELETE | `/courses/:id` | `useDeleteCourse` |
| `post-course-like.ts` | POST | `/courses/:id/like` | `usePostCourseLike` |
| `delete-course-like.ts` | DELETE | `/courses/:id/like` | `useDeleteCourseLike` |

**추가 파일**:
- `endpoint.ts`: URL 상수 정의
- `queryKey.ts`: React Query 키 관리

---

#### 2. User APIs (10개)
**위치**: `src/entities/user/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-my-profile.ts` | GET | `/users/me` | `useGetMyProfile` |
| `get-user-profile.ts` | GET | `/users/:id` | `useGetUserProfile` |
| `get-user-summary.ts` | GET | `/users/:id/summary` | `useGetUserSummary` |
| `get-user-courses.ts` | GET | `/users/:id/courses` | `useGetUserCourses` |
| `get-my-like-courses.ts` | GET | `/users/me/like-courses` | `useGetMyLikeCourses` |
| `get-my-place-reviews.ts` | GET | `/users/me/place-reviews` | `useGetMyPlaceReviews` |
| `get-my-regions-preferences.ts` | GET | `/users/me/regions-preferences` | `useGetMyRegionsPreferences` |
| `post-my-regions-preferences.ts` | POST | `/users/me/regions-preferences` | `usePostMyRegionsPreferences` |
| `delete-my-region-preferences.ts` | DELETE | `/users/me/regions-preferences/:id` | `useDeleteMyRegionPreferences` |
| `update-user-profile.ts` | PATCH | `/users/me` | `useUpdateUserProfile` |

---

#### 3. Place APIs (7개)
**위치**: `src/entities/place/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-place.ts` | GET | `/places/:id` | `useGetPlace` |
| `get-place-aggregation.ts` | GET | `/places/:id/aggregation` | `useGetPlaceAggregation` |
| `get-place-search-result.ts` | GET | `/places/search` | - |
| `get-seoul-data.ts` | GET | `/places/seoul` | - |
| `post-place.ts` | POST | `/places` | - |

**Place Reviews** (`src/entities/place/reviews/api/`):

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-place-reviews.ts` | GET | `/places/:id/reviews` | `useGetPlaceReviews` |
| `get-place-review.ts` | GET | `/places/:placeId/reviews/:reviewId` | `useGetPlaceReview` |
| `post-place-review.ts` | POST | `/places/:id/reviews` | `usePostPlaceReview` |
| `update-place-review.ts` | PATCH | `/places/:placeId/reviews/:reviewId` | `useUpdatePlaceReview` |
| `delete-place-review.ts` | DELETE | `/places/:placeId/reviews/:reviewId` | `useDeletePlaceReview` |

---

#### 4. Plan APIs (5개)
**위치**: `src/entities/plan/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-plans.ts` | GET | `/plans` | `useGetPlans` |
| `get-plan.ts` | GET | `/plans/:id` | `useGetPlan` |
| `post-plan.ts` | POST | `/plans` | `usePostPlan` |
| `update-plan.ts` | PATCH | `/plans/:id` | `useUpdatePlan` |
| `delete-plan.ts` | DELETE | `/plans/:id` | `useDeletePlan` |

---

#### 5. Comment APIs (4개)
**위치**: `src/entities/comment/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-comments.ts` | GET | `/comments` | `useGetComments` |
| `post-comment.ts` | POST | `/comments` | `usePostComment` |
| `update-comment.ts` | PATCH | `/comments/:id` | `useUpdateComment` |
| `delete-comment.ts` | DELETE | `/comments/:id` | `useDeleteComment` |

---

#### 6. Notification APIs (3개)
**위치**: `src/entities/notification/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-notifications.ts` | GET | `/notifications` | `useGetNotifications` |
| `read-notification.ts` | PATCH | `/notifications/:id/read` | `useReadNotification` |
| `post-deviceToken.ts` | POST | `/notifications/device-token` | - |

---

#### 7. Auth APIs (2개)
**위치**: `src/entities/auth/api/`

| 파일명 | HTTP 메서드 | 엔드포인트 | React Query Hook |
|--------|------------|-----------|------------------|
| `get-login-url.ts` | GET | `/oauth2/:provider/login-url` | - |
| `post-login.ts` | GET | `/oauth2/:provider/login` | - |

---

#### 8. Image APIs (2개)
**위치**: `src/shared/api/image/`

| 파일명 | 설명 |
|--------|------|
| `get-image-upload-url.ts` | S3 presigned URL 요청 |
| `post-image.ts` | S3에 이미지 업로드 |

---

### 현재 아키텍처의 특징

#### 1. **잘 구조화된 FSD 패턴**
```
src/entities/
  ├── course/
  │   ├── api/          # API 로직
  │   ├── model/        # 타입 정의
  │   └── ui/           # UI 컴포넌트
  ├── user/
  ├── place/
  └── ...
```

각 entity는 독립적으로 관리되며, API 레이어가 명확히 분리되어 있습니다.

#### 2. **일관된 API 파일 구조**
모든 entity의 `api/` 디렉토리는 다음 구조를 따릅니다:
- `endpoint.ts`: URL 상수 정의
- `queryKey.ts`: React Query 키 팩토리
- `get-*.ts`, `post-*.ts`, `update-*.ts`, `delete-*.ts`: 개별 API 함수
- `index.ts`: 외부로 export

#### 3. **React Query 통합**
모든 API 함수는 두 가지 형태로 제공:
```typescript
// 1. 순수 함수 (서버 컴포넌트에서 사용 가능)
export const getCourses = async (params) => { ... }

// 2. React Query Hook (클라이언트 컴포넌트 전용)
export const useGetCourses = (params) => {
  return useQuery({
    queryKey: COURSE_QUERY_KEY.all(params),
    queryFn: () => getCourses(params)
  })
}
```

#### 4. **인증 및 보안**

**두 가지 axios 인스턴스**:
```typescript
// customAxios: 인증 필요 (토큰 자동 추가)
customAxios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

// publicAxios: 인증 불필요 (로그인 등)
```

**자동 토큰 갱신**:
- 401 에러 발생 시 `/auth/reissue` 호출
- 새 토큰으로 원래 요청 재시도
- 실패 시 로그인 페이지로 리다이렉트

**HMAC-SHA256 서명**:
```typescript
const matcher = `${timestamp};${path};${body};`
const signature = CryptoJS.HmacSHA256(matcher, SECRET_KEY)
```

## 왜 Next.js에서 fetch가 더 나은가?

### 1. **Next.js 네이티브 캐싱**
```typescript
// fetch는 자동 캐싱 및 재검증 지원
fetch('/api/users', {
  next: { revalidate: 60 }, // 60초 캐싱
  cache: 'force-cache'      // 강제 캐싱
})
```

### 2. **Server Components 지원**
```typescript
// Server Component에서 직접 사용 가능
async function UserPage() {
  const users = await fetch('/api/users').then(r => r.json())
  return <UserList users={users} />
}
```

### 3. **Request Deduplication**
Next.js는 동일한 fetch 요청을 자동으로 중복 제거합니다.

### 4. **번들 크기 감소**
- axios: ~13KB (gzipped)
- fetch: 브라우저 네이티브 (0KB)

### 5. **Streaming & Suspense**
fetch는 React 18의 Streaming과 완벽하게 통합됩니다.

## 아키텍처 결정

> [!IMPORTANT]
> **선택 1: Next.js API Routes를 프록시로 사용 (권장) ✅**
> 
> 클라이언트 → Next.js API Routes → Spring Boot
> 
> **장점:**
> - 백엔드 URL을 클라이언트에 노출하지 않음 (보안)
> - 서버 전용 환경 변수 사용 가능
> - CORS 문제 해결
> - 서버에서 요청/응답 가공 가능
> 
> **단점:**
> - 모든 요청이 Next.js 서버를 거쳐야 함 (약간의 레이턴시)

> [!WARNING]
> **Breaking Change: 환경 변수 변경 필요**
> 
> - 현재: `NEXT_PUBLIC_SERVER_URL` (클라이언트 노출)
> - 변경: `SERVER_URL` (서버 전용)
> - 현재: `NEXT_PUBLIC_SECRET_KEY` (클라이언트 노출)
> - 변경: `SECRET_KEY` (서버 전용)
> 
> 배포 환경(Vercel, AWS 등)의 환경 변수도 업데이트 필요!

## Proposed Changes

### Core Infrastructure

#### [NEW] [fetch-client.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/src/shared/api/fetch/fetch-client.ts)

fetch 기반 클라이언트 래퍼 (axios 인터셉터 로직 포함):

```typescript
// src/shared/api/fetch/fetch-client.ts
import { generateSignature } from './signature'

interface FetchOptions extends RequestInit {
  params?: Record<string, any>
}

class FetchClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const { params, ...fetchOptions } = options
    
    // URL 생성
    let url = `${this.baseURL}${endpoint}`
    if (params) {
      const searchParams = new URLSearchParams(params)
      url += `?${searchParams.toString()}`
    }

    // 인증 토큰 추가
    const token = localStorage.getItem('accessToken')
    const headers = new Headers(fetchOptions.headers)
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    // 서명 추가
    const { timestamp, signature } = generateSignature(
      endpoint,
      fetchOptions.body as string
    )
    headers.set('X-Timestamp', timestamp.toString())
    headers.set('X-Signature', signature)

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers,
      })

      // 401 에러 처리 (토큰 갱신)
      if (response.status === 401) {
        const newToken = await this.refreshToken()
        if (newToken) {
          headers.set('Authorization', `Bearer ${newToken}`)
          return this.request(endpoint, options)
        } else {
          window.location.href = '/login'
          throw new Error('Unauthorized')
        }
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      return data.results
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  private async refreshToken(): Promise<string | null> {
    try {
      const response = await fetch('/api/auth/reissue', {
        method: 'POST',
        credentials: 'include',
      })
      const data = await response.json()
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        return data.accessToken
      }
      return null
    } catch {
      return null
    }
  }

  async get<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' })
  }

  async post<T>(endpoint: string, body?: any, options?: FetchOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json', ...options?.headers },
    })
  }

  async patch<T>(endpoint: string, body?: any, options?: FetchOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json', ...options?.headers },
    })
  }

  async delete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' })
  }
}

export const authFetch = new FetchClient('/api')
export const publicFetch = new FetchClient('/api')
```

---

#### [NEW] [signature.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/src/shared/api/fetch/signature.ts)

fetch용 서명 생성 (기존 로직 재사용):

```typescript
// src/shared/api/fetch/signature.ts
import CryptoJS from 'crypto-js'

const DELIMITER = ';'

export function generateSignature(path: string, body: string = '') {
  const timestamp = Math.floor(Date.now() / 1000)
  const fullPath = '/api/v1' + path
  
  const matcher = `${timestamp}${DELIMITER}${fullPath}${DELIMITER}${body}${DELIMITER}`
  const signature = CryptoJS.HmacSHA256(
    matcher,
    process.env.NEXT_PUBLIC_SECRET_KEY || ''
  ).toString(CryptoJS.enc.Base64url)

  return { timestamp, signature }
}
```

---

#### [NEW] [route.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/app/api/[...path]/route.ts)

범용 프록시 라우트 핸들러:

```typescript
// app/api/[...path]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import CryptoJS from 'crypto-js'

const SERVER_URL = process.env.SERVER_URL
const SECRET_KEY = process.env.SECRET_KEY

async function handleRequest(
  method: string,
  request: NextRequest,
  params: { path: string[] }
) {
  const path = params.path.join('/')
  const url = `${SERVER_URL}/api/v1/${path}`
  
  // 요청 바디
  let body = undefined
  if (['POST', 'PATCH', 'PUT'].includes(method)) {
    body = await request.text()
  }

  // 서명 생성
  const timestamp = Math.floor(Date.now() / 1000)
  const matcher = `${timestamp};/api/v1/${path};${body || ''};`
  const signature = CryptoJS.HmacSHA256(matcher, SECRET_KEY || '').toString(
    CryptoJS.enc.Base64url
  )

  // 헤더 복사
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('X-Timestamp', timestamp.toString())
  headers.set('X-Signature', signature)
  
  // Authorization 헤더 복사
  const authHeader = request.headers.get('Authorization')
  if (authHeader) {
    headers.set('Authorization', authHeader)
  }

  // Spring Boot 호출
  const response = await fetch(url + request.nextUrl.search, {
    method,
    headers,
    body,
    credentials: 'include',
  })

  const data = await response.json()
  return NextResponse.json(data, { status: response.status })
}

export async function GET(req: NextRequest, { params }: any) {
  return handleRequest('GET', req, params)
}

export async function POST(req: NextRequest, { params }: any) {
  return handleRequest('POST', req, params)
}

export async function PATCH(req: NextRequest, { params }: any) {
  return handleRequest('PATCH', req, params)
}

export async function DELETE(req: NextRequest, { params }: any) {
  return handleRequest('DELETE', req, params)
}
```

---

### Entity API Migration (40개 파일)

각 entity의 API 파일을 fetch 기반으로 변경:

#### 예시: [get-courses.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/src/entities/course/api/get-courses.ts)

```diff
- import { customAxios } from '@/src/shared/api'
+ import { authFetch } from '@/src/shared/api'
  import { COURSE_QUERY_KEY } from './queryKey'
  import { useQuery } from '@tanstack/react-query'
  import { COURSE_URL } from './endpoint'

  export const getCourses = async ({ ... }) => {
    try {
-     const response = await customAxios.get(COURSE_URL.courses(), {
-       params: { sort, limit, primary_region, secondary_region, category },
-     })
-     return response.data.results
+     return await authFetch.get(COURSE_URL.courses(), {
+       params: { sort, limit, primary_region, secondary_region, category },
+     })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  export const useGetCourses = (params) => {
    return useQuery({
      queryKey: COURSE_QUERY_KEY.all(params),
      queryFn: () => getCourses(params),
      staleTime: 0,
      gcTime: 0,
    })
  }
```

**동일한 패턴으로 40개 파일 모두 수정**

---

### Configuration

#### [MODIFY] [.env.local](file:///c:/Users/user/Desktop/Works/test/wooco-fe/.env.local)

환경 변수 변경:
```diff
- NEXT_PUBLIC_SERVER_URL=https://api.example.com
+ SERVER_URL=https://api.example.com

- NEXT_PUBLIC_SECRET_KEY=your-secret-key
+ SECRET_KEY=your-secret-key

- NEXT_PUBLIC_CUSTOM_TIMESTAMP_HEADER=X-Timestamp
+ # 서버에서만 사용하므로 NEXT_PUBLIC 불필요

- NEXT_PUBLIC_CUSTOM_SIGNATURE_HEADER=X-Signature
+ # 서버에서만 사용하므로 NEXT_PUBLIC 불필요
```

#### [DELETE] [instance.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/src/shared/api/axios/instance.ts)

axios 인스턴스 삭제

#### [DELETE] [signature.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/src/shared/api/axios/signature.ts)

axios 서명 로직 삭제

#### [MODIFY] [index.ts](file:///c:/Users/user/Desktop/Works/test/wooco-fe/src/shared/api/index.ts)

```diff
- export * from './axios'
+ export * from './fetch'
  export * from './image'
```

#### [MODIFY] [package.json](file:///c:/Users/user/Desktop/Works/test/wooco-fe/package.json)

```diff
  "dependencies": {
-   "axios": "^1.7.9",
    "crypto-js": "^4.2.0",
    ...
  }
```

## 마이그레이션 전략

### 옵션 A: 점진적 마이그레이션 (권장) ✅

**단계별 접근:**

1. **Phase 1: 인프라 구축** (1-2시간)
   - `fetch-client.ts` 구현
   - `signature.ts` 구현
   - API Routes 프록시 구현
   - 환경 변수 설정

2. **Phase 2: 파일럿 마이그레이션** (1시간)
   - Course entity만 먼저 마이그레이션 (9개 파일)
   - 로컬 테스트 및 검증
   - 문제 발견 시 롤백 가능

3. **Phase 3: 순차 마이그레이션** (3-4시간)
   - User → Place → Plan → Comment → Notification → Auth 순서
   - 각 entity 마이그레이션 후 테스트

4. **Phase 4: 정리** (30분)
   - axios 관련 코드 삭제
   - package.json에서 axios 제거
   - 최종 테스트

**장점:**
- 안전하고 롤백 가능
- 각 단계에서 문제 조기 발견
- 팀원들이 점진적으로 적응 가능

**단점:**
- 시간 소요 (총 5-7시간)
- 중간 상태에서 axios와 fetch 혼재

---

### 옵션 B: 전체 마이그레이션

한 번에 모든 40개 API를 fetch로 변경

**장점:**
- 빠른 완료 (3-4시간)
- 일관성 있는 코드베이스

**단점:**
- 리스크 높음
- 문제 발생 시 롤백 어려움
- 대규모 PR로 리뷰 부담

## Verification Plan

### Automated Tests

#### 1. API Routes 테스트
```bash
# 테스트 파일 작성 필요
# app/api/[...path]/route.test.ts
```

테스트 내용:
- 프록시가 올바른 URL로 요청 전달
- 인증 토큰이 헤더에 포함
- 서명이 올바르게 생성

#### 2. fetch-client 유닛 테스트
```bash
# src/shared/api/fetch/fetch-client.test.ts
```

테스트 내용:
- GET/POST/PATCH/DELETE 메서드
- 토큰 갱신 로직
- 에러 핸들링

### Manual Verification

#### 1. 로그인 플로우
- [ ] OAuth 로그인 성공
- [ ] 토큰 localStorage 저장 확인
- [ ] 메인 페이지 리다이렉트

#### 2. 인증 API
- [ ] `/users/me` 호출 성공
- [ ] Authorization 헤더 확인
- [ ] 서명 헤더 확인

#### 3. 토큰 갱신
- [ ] 만료된 토큰으로 401 에러 발생
- [ ] 자동 토큰 갱신 확인
- [ ] 원래 요청 재시도 확인

#### 4. CRUD 작업
각 entity별 테스트:
- [ ] **Course**: 생성, 조회, 수정, 삭제, 좋아요
- [ ] **Place**: 생성, 리뷰 작성, 수정, 삭제
- [ ] **Plan**: 생성, 조회, 수정, 삭제
- [ ] **Comment**: 작성, 수정, 삭제
- [ ] **User**: 프로필 조회, 수정, 지역 선호도 관리
- [ ] **Notification**: 조회, 읽음 처리

#### 5. React Query 캐싱
- [ ] 데이터 캐싱 확인
- [ ] Invalidation 동작 확인
- [ ] Optimistic Updates 확인

### Performance Comparison

```bash
# 번들 크기 비교
npm run build

# Before: axios 포함
# After: axios 제거 (예상 -13KB gzipped)
```

## 예상 작업 시간

### 점진적 마이그레이션 (권장)
- Phase 1 (인프라): 1-2시간
- Phase 2 (파일럿): 1시간
- Phase 3 (순차 마이그레이션): 3-4시간
- Phase 4 (정리): 30분
- 테스트 및 검증: 2-3시간
- **총 예상 시간: 7-10시간**

### 전체 마이그레이션
- 인프라 + 전체 마이그레이션: 3-4시간
- 테스트 및 검증: 2-3시간
- **총 예상 시간: 5-7시간**

## 다음 단계

1. ✅ 이 계획 검토 및 피드백
2. ⬜ 마이그레이션 전략 선택 (점진적 vs 전체)
3. ⬜ 환경 변수 변경 승인
4. ⬜ 구현 시작
