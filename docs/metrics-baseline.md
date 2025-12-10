# Baseline Metrics - Before Migration (axios)

**측정 날짜**: 2025-11-25  
**브랜치**: dev  
**커밋**: be3b315  
**Next.js 버전**: 14.2.28  
**Node.js 버전**: v24.11.1  
**npm 버전**: 11.6.2

---

## 1. 번들 크기 (Bundle Size) 📦

### Next.js Build Output

```
Route (app)                                  Size     First Load JS
┌ ○ /                                        700 B           471 kB
├ ○ /_not-found                              316 B           213 kB
├ ○ /courses                                 816 B           468 kB
├ ƒ /courses/[id]                            3.02 kB         470 kB
├ ƒ /courses/[id]/comments                   2.93 kB         470 kB
├ ƒ /courses/[id]/update                     702 B           471 kB
├ ○ /courses/new                             355 B           468 kB
├ ○ /login                                   1.82 kB         469 kB
├ ○ /manifest.webmanifest                    0 B                0 B
├ ○ /notices/1                               1.02 kB         471 kB
├ ○ /notifications                           660 B           468 kB
├ ƒ /oauth/[provider]/callback               1.04 kB         468 kB
├ ○ /onboard                                 1.7 kB          469 kB
├ ƒ /places/[id]                             2.11 kB         469 kB
├ ƒ /places/[id]/reviews                     665 B           468 kB
├ ƒ /places/[id]/reviews/[review-id]         318 B           213 kB
├ ƒ /places/[id]/reviews/[review-id]/update  701 B           471 kB
├ ƒ /places/[id]/reviews/new                 701 B           471 kB
├ ○ /plans                                   1.53 kB         469 kB
├ ƒ /plans/[id]                              607 B           468 kB
├ ƒ /plans/[id]/update                       701 B           471 kB
├ ○ /plans/new                               702 B           471 kB
├ ○ /privacy                                 317 B           213 kB
├ ○ /terms                                   317 B           213 kB
├ ƒ /users/[id]                              1.03 kB         468 kB
├ ƒ /users/[id]/wishlist                     922 B           468 kB
└ ○ /users/setting                           1.84 kB         469 kB
```

### 핵심 지표

| 항목 | 값 | 비고 |
|------|-----|------|
| **First Load JS shared by all** | **212 kB** | 모든 페이지가 공유하는 JS |
| **Largest Route (First Load)** | **471 kB** | `/` 홈페이지 |
| **Smallest Route (First Load)** | **213 kB** | `/_not-found` |
| **Average Route Size** | ~468 kB | 대부분의 라우트 |

### Shared Chunks 상세

```
+ First Load JS shared by all                212 kB
  ├ chunks/204-dacd95b76faefc9d.js           119 kB
  ├ chunks/52774a7f-3999679c6e1f8125.js      36.6 kB
  ├ chunks/fd9d1056-db2ed49e7db45523.js      53.8 kB
  └ other shared chunks (total)              2.86 kB
```

### .next/static/chunks 총 크기

| 항목 | 값 |
|------|-----|
| **파일 수** | 46개 |
| **총 크기** | **2.28 MB** (압축 전) |

---

## 2. 의존성 (Dependencies) 📚

### axios 정보

```
wooco-fe@0.1.0
└── axios@1.8.4
```

- **버전**: 1.8.4
- **예상 번들 크기**: ~13KB (gzipped)
- **사용처**: 40개 API 엔드포인트

### 전체 의존성 통계

| 항목 | 개수 |
|------|------|
| Production Dependencies | 450 |
| Dev Dependencies | 364 |
| Optional Dependencies | 65 |
| Peer Dependencies | 28 |
| **Total** | **878** |

### 보안 취약점

| 심각도 | 개수 |
|--------|------|
| Critical | 1 |
| High | 2 |
| Moderate | 2 |
| Low | 1 |
| Info | 0 |
| **Total** | **6** |

> [!WARNING]
> 6개의 보안 취약점 발견. axios 제거 후 재측정 필요.

---

## 3. 성능 지표 (Performance Metrics) ⚡

### Lighthouse 점수 (측정 필요)

> [!NOTE]
> 로컬 서버 실행 후 측정 필요: `npm run start`

| 카테고리 | 점수 | 비고 |
|----------|------|------|
| Performance | ⬜ 측정 필요 | |
| Accessibility | ⬜ 측정 필요 | |
| Best Practices | ⬜ 측정 필요 | |
| SEO | ⬜ 측정 필요 | |

### Core Web Vitals (측정 필요)

| 지표 | 값 | 목표 |
|------|-----|------|
| **FCP** (First Contentful Paint) | ⬜ 측정 필요 | < 1.8s |
| **LCP** (Largest Contentful Paint) | ⬜ 측정 필요 | < 2.5s |
| **TBT** (Total Blocking Time) | ⬜ 측정 필요 | < 200ms |
| **CLS** (Cumulative Layout Shift) | ⬜ 측정 필요 | < 0.1 |
| **Speed Index** | ⬜ 측정 필요 | < 3.4s |

---

## 4. 빌드 시간 (Build Time) ⏱️

### Next.js Build

| 단계 | 시간 | 비고 |
|------|------|------|
| Linting and checking validity | ✓ | |
| Collecting page data | ✓ | |
| Generating static pages | ✓ | 16/16 pages |
| Collecting build traces | ✓ | |
| Finalizing page optimization | ✓ | |
| **Total Build Time** | ⬜ 측정 필요 | |

---

## 5. 런타임 메트릭 (Runtime Metrics) 🚀

### API 응답 시간 (측정 필요)

로컬 개발 서버에서 측정:

| API 엔드포인트 | 평균 응답 시간 | 비고 |
|---------------|---------------|------|
| GET /courses | ⬜ 측정 필요 | |
| GET /users/me | ⬜ 측정 필요 | |
| GET /plans | ⬜ 측정 필요 | |
| POST /courses | ⬜ 측정 필요 | |

### React Query 캐시 효율 (측정 필요)

| 지표 | 값 |
|------|-----|
| Cache Hit Rate | ⬜ 측정 필요 |
| Average Query Time | ⬜ 측정 필요 |
| Stale Queries | ⬜ 측정 필요 |

---

## 6. 코드 메트릭 (Code Metrics) 📝

### API 레이어 코드

| 항목 | 값 |
|------|-----|
| API 파일 수 | 40개 |
| axios 사용 파일 | 38개 (auth, entities) |
| publicAxios 사용 | 2개 (로그인) |
| customAxios 사용 | 36개 (인증 필요) |

### 코드 라인 수 (측정 필요)

```bash
# 측정 명령어
cloc src/shared/api/axios/
```

| 항목 | 라인 수 |
|------|---------|
| instance.ts | ⬜ 측정 필요 |
| signature.ts | ⬜ 측정 필요 |
| **Total** | ⬜ 측정 필요 |

---

## 7. 측정 환경 정보 💻

| 항목 | 값 |
|------|-----|
| OS | Windows |
| Node.js | v24.11.1 |
| npm | 11.6.2 |
| Next.js | 14.2.28 |
| React | 18.2.0 |
| TypeScript | ^5 |

---

## 다음 단계 (Next Steps)

### 즉시 측정 가능한 항목

- [ ] Node.js 버전 확인: `node -v`
- [ ] npm 버전 확인: `npm -v`
- [ ] 빌드 시간 측정: `time npm run build`
- [ ] 코드 라인 수: `cloc src/shared/api/axios/`

### 로컬 서버 실행 후 측정

- [ ] 서버 시작: `npm run start`
- [ ] Lighthouse 성능 측정 (3회 평균)
- [ ] Core Web Vitals 측정
- [ ] API 응답 시간 측정 (Chrome DevTools Network)

### 선택적 측정

- [ ] Vercel Analytics 현재 데이터 스냅샷
- [ ] Google Analytics 페이지 로드 시간
- [ ] 실제 사용자 메트릭 (RUM)

---

## 참고사항

> [!IMPORTANT]
> 이 문서는 **마이그레이션 전 베이스라인**입니다.  
> 마이그레이션 완료 후 동일한 항목을 측정하여 비교할 예정입니다.

**측정 일관성을 위한 주의사항:**
- 동일한 환경에서 측정 (로컬 개발 환경)
- Lighthouse는 시크릿 모드에서 3회 측정 후 평균
- 빌드는 캐시 클리어 후 측정: `rm -rf .next && npm run build`
- API 응답 시간은 5회 측정 후 평균
