# Baseline Metrics Summary - Quick Reference

**측정 완료**: 2025-11-25  
**상태**: ✅ 베이스라인 기록 완료

---

## 🎯 핵심 지표 (Key Metrics)

| 카테고리 | 지표 | 현재 값 (Before) | 목표 (After) |
|---------|------|-----------------|-------------|
| **번들 크기** | First Load JS (shared) | **212 kB** | ~199 kB (-13 kB) |
| **번들 크기** | Largest Route | **471 kB** | ~458 kB |
| **번들 크기** | Total Chunks Size | **2.28 MB** | ~2.15 MB |
| **의존성** | axios 버전 | **1.8.4** | ❌ 제거 예정 |
| **의존성** | Total Dependencies | **878** | ~877 (-1) |
| **보안** | Vulnerabilities | **6개** | 감소 예상 |
| **성능** | Lighthouse Performance | ⬜ 측정 필요 | +5~10점 |
| **성능** | LCP | ⬜ 측정 필요 | -200~300ms |

---

## 📦 번들 크기 상세

### Shared Chunks (212 kB)
```
├ chunks/204-dacd95b76faefc9d.js           119 kB
├ chunks/52774a7f-3999679c6e1f8125.js      36.6 kB
├ chunks/fd9d1056-db2ed49e7db45523.js      53.8 kB
└ other shared chunks (total)              2.86 kB
```

### 대표 라우트 크기
- 홈페이지 (`/`): **471 kB**
- 코스 목록 (`/courses`): **468 kB**
- 로그인 (`/login`): **469 kB**
- Not Found: **213 kB**

---

## 📚 의존성 정보

- **axios**: 1.8.4 (제거 예정)
- **Production deps**: 450개
- **Total deps**: 878개
- **보안 취약점**: 6개 (Critical 1, High 2, Moderate 2, Low 1)

---

## ⏭️ 다음 측정 항목 (선택적)

로컬 서버 실행 후 측정 가능:

```bash
npm run start
```

### Lighthouse 측정
- [ ] Performance 점수
- [ ] FCP (First Contentful Paint)
- [ ] LCP (Largest Contentful Paint)
- [ ] TBT (Total Blocking Time)
- [ ] Speed Index

### API 응답 시간
- [ ] GET /courses
- [ ] GET /users/me
- [ ] GET /plans
- [ ] POST /courses

---

## 📊 비교 방법

마이그레이션 완료 후:

1. **동일한 빌드 명령어 실행**
   ```bash
   npx next build
   ```

2. **번들 크기 비교**
   - First Load JS shared: 212 kB → ? kB
   - 감소량 계산

3. **의존성 확인**
   ```bash
   npm ls axios  # 제거 확인
   npm audit     # 취약점 감소 확인
   ```

4. **Lighthouse 재측정** (선택)
   - 동일 환경에서 3회 측정 후 평균

---

## 📁 상세 문서

전체 측정 데이터는 다음 문서 참조:
- [metrics-baseline.md](file:///C:/Users/user/.gemini/antigravity/brain/18c3d95b-0433-4997-af67-a1cd5c2c44e4/metrics-baseline.md)
