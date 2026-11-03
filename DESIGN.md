# 대한정밀 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

구매 담당자와 설계 엔지니어가 휴대폰에서도 설비·인증·연락처를 빠르게 확인하고 도면을 보낼 수 있는, 단단하고 정보 중심적인 B2B 회사 소개 페이지. 대한정밀은 연습용 가상 회사다.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- 보유 설비와 가공 범위를 확인한다

- 품질 인증과 협력사 등록 이력을 확인한다

- 전화하거나 이메일로 도면을 보내 견적을 요청한다

- 공장 위치를 지도에서 찾는다
<!-- design-md:claim-end -->

### Design direction

- 정밀하고 단단함

- 정보 우선

- 절제된 강조

### Principles

- 행동 버튼은 한눈에 읽혀야 한다: 강조색은 견적 요청처럼 실제 행동에만 쓴다

- 숫자와 표가 주인공이다: 설비 표와 수치는 장식보다 먼저 읽힌다

- 사진은 실제 현장만 보여준다: 연습작(가상 회사)은 AI 생성 사진을 쓰고, 실제 고객 작업은 고객이 제공한 사진으로 바꾼다

### Avoid

- 둥근 카드와 아이콘 타일의 반복 나열

- 그라데이션 장식과 과장된 마케팅 문구

- 검증되지 않은 거래처 실명이나 인증 주장

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent.on-dark**: `#ff8a4c` — 어두운 배경 위 작은 강조 (대비 8.02:1)
- **color.action.primary**: `#c2410c` — 견적 요청 등 주 행동 버튼 배경 (흰 글씨 대비 5.18:1)
- **color.action.primary-hover**: `#9a3412` — 주 행동 버튼에 마우스를 올렸을 때 (흰 글씨 대비 7.31:1)
- **color.border.subtle**: `#d6dbe6` — 표와 카드의 테두리
- **color.brand.logo**: `#ea7036` — 로고 판 색. 글자는 color.text.strong (대비 5.69:1)
- **color.surface.base**: `#ffffff` — 기본 배경
- **color.surface.dark**: `#0b1220` — 첫 화면과 품질 구역의 짙은 강철색 배경
- **color.surface.muted**: `#eef1f6` — 구역을 나누는 연회색 배경
- **color.text.muted**: `#3e4f73` — 보조 설명 글자색
- **color.text.on-dark**: `#ffffff` — 어두운 배경 위 글자색
- **color.text.on-dark-muted**: `#b3bccd` — 어두운 배경 위 보조 글자색
- **color.text.strong**: `#111a2b` — 본문과 제목의 기본 글자색
- **radius.control**: `4px` — 버튼과 입력 요소
- **radius.none**: `0px` — 카드, 표, 사진 자리, 구역
- **size.control-height**: `48px` — 주 행동 버튼 높이
- **space.lg**: `24px`
- **space.md**: `16px`
- **space.section**: `64px` — 구역 사이 세로 간격 (데스크톱은 80px까지)
- **space.sm**: `12px`
- **space.xl**: `32px`
- **space.xs**: `8px`

### Contrast pairs

- color.text.strong on color.surface.base: minimum 4.5:1
- color.text.muted on color.surface.base: minimum 4.5:1
- color.text.muted on color.surface.muted: minimum 4.5:1
- color.text.on-dark on color.action.primary: minimum 4.5:1
- color.text.on-dark on color.action.primary-hover: minimum 4.5:1
- color.text.on-dark on color.surface.dark: minimum 4.5:1
- color.text.on-dark-muted on color.surface.dark: minimum 4.5:1
- color.accent.on-dark on color.surface.dark: minimum 4.5:1
- color.text.strong on color.brand.logo: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- color.action.primary는 견적 요청·전화·이메일 같은 실제 행동에만 쓰고 배경 장식에 쓰지 않는다

- 한 화면에 강조색 버튼은 최대 2개까지 둔다

- 카드·표·사진 자리는 radius.none, 버튼만 radius.control을 쓴다

- 그림자 대신 color.border.subtle 테두리로 구역을 나눈다

- 그라데이션은 사진 자리 표시 외에는 쓰지 않는다
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | 첫 화면 슬로건 | Pretendard Variable | clamp(36px, 6vw, 54px) | 800 | 1.15 | -0.02em |
| heading | 구역 제목 | Pretendard Variable | clamp(28px, 4vw, 36px) | 800 | 1.25 | -0.01em |
| body | 본문 | Pretendard Variable | 16px | 400 | 1.6 |  |
| action | 버튼 글자 | Pretendard Variable | 15px | 700 | 1.2 |  |
| label | 구역 위 작은 영문 표시와 표 머리글 | Pretendard Variable | 12px | 700 | 1.3 | 0.16em |
| data | 설비 표의 가공 범위 등 숫자 | ui-monospace, SFMono-Regular, Menlo, monospace | 13px | 400 | 1.4 |  |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| pretendard | font | licensed-sourced | verified | npm 패키지 pretendard (orioncactus/pretendard) | SIL Open Font License 1.1, 라이선스 문구가 글꼴 CSS 파일에 포함됨 |
| logo-dh | logo | generated-original | not-required | app/icon.svg | 연습용 가상 회사 로고. 브라우저 탭 아이콘과 상단 메뉴에 같은 도형을 쓴다 |

### Rules

- 글자 크기는 화면당 4단계 이내로 쓴다

- 숫자가 나란히 놓이는 곳은 글자 폭이 같은 숫자(tabular-nums)를 쓴다

- 검증되지 않은 사진·로고를 진짜처럼 넣지 않는다

- 공장 전경·설비·측정실 사진은 실제 고객 작업에서는 고객이 제공한 것만 쓴다. 연습작에는 AI 생성 사진을 쓰고, 생성 도구 표시는 잘라낸다

- 로고는 스텐실 DH를 쓴다: 판은 color.brand.logo, 글자는 color.text.strong. 글자를 흰색으로 바꾸지 않는다

<!-- design-md:section components-states -->
## 4. Components & States

### Component: primary-action

**Semantics:** 견적 요청·전화·이메일처럼 페이지를 벗어나는 링크 버튼

- Anatomy: 아이콘(선택), 글자
- Variants: 채움, 외곽선
- States: default, hover, focus-visible
- Token references: color.action.primary, color.action.primary-hover, color.text.on-dark, radius.control, size.control-height

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | 모든 버튼이 항상 사용 가능한 링크다 |
| loading | not-applicable | 페이지 안에서 처리하는 작업 없이 전화·메일 앱이나 지도로 이동만 한다 |
| error | not-applicable | 입력 폼이 없다 |
| success | not-applicable | 입력 폼이 없다 |

### Component: equipment-table

**Semantics:** 보유 설비 목록 표. 좁은 화면에서는 표 전체가 옆으로 밀려서 보인다

- Anatomy: 머리글 행, 설비명, 제조사, 보유 수량, 가공 범위
- States: default, hover
- Token references: color.surface.dark, color.text.on-dark-muted, color.border.subtle, radius.none

- Interaction kind: non-interactive
- Interaction reason: 읽기 전용 표다. 행에 마우스를 올리면 배경만 옅게 바뀐다

### Component: site-header

**Semantics:** 화면 위에 고정된 메뉴. 모바일에서는 메뉴가 접힌다

- Anatomy: 로고, 메뉴, 전화 버튼, 모바일 메뉴 버튼
- States: default, hover, focus-visible
- Token references: color.surface.base, color.border.subtle, color.text.strong

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | 비활성 메뉴 항목이 없다 |
| loading | not-applicable | 같은 페이지 안에서 위치만 이동한다 |
| error | not-applicable | 입력이 없다 |
| success | not-applicable | 입력이 없다 |

### Component: photo-slot

**Semantics:** 고객 사진을 받기 전까지 사진 위치와 용도를 보여주는 빈 자리

- Anatomy: 어두운 바탕, 용도 라벨
- States: default
- Token references: color.surface.dark, color.text.on-dark-muted, radius.none

- Interaction kind: non-interactive
- Interaction reason: 표시 전용이다

### Rules

- 키보드로 이동할 때 모든 링크와 버튼에 눈에 보이는 포커스 테두리를 둔다

- 버튼과 메뉴의 누를 수 있는 영역은 최소 44px 높이를 지킨다

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- 본문 최대 폭은 1152px, 좌우 여백은 모바일 16px·태블릿 이상 24px

- 구역 순서: 첫 화면 → 회사소개 → 사업분야 → 보유설비 → 품질·인증 → 진행순서 → 거래분야 → 연혁 → 문의·위치

- 좁은 화면에서는 여러 칸이 한 칸으로 쌓이고, 설비 표만 옆으로 밀어서 본다

- 페이지 전체가 옆으로 밀리는 가로 스크롤은 없어야 한다

### Platform: web

- 휴대폰 화면을 먼저 확인한다
- 전화번호는 누르면 바로 전화가 걸리는 링크로 만든다

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- 짧고 사실 중심

- 현장 용어를 그대로 쓴다

- 숫자와 단위를 명확히 쓴다

### Terminology

| Term | Preferred form |
|---|---|
| CMM | 3차원 측정기(CMM) |
| MCT | 머시닝센터(MCT) |
| 견적 요청 | 도면 보내고 견적 받기 |

### Locale: ko (supported)

- 존댓말 '-습니다'체를 쓴다
- 가공 범위 단위는 mm로 통일한다

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=en -->
### Authority

This document is the project design contract for the declared scope.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Project priority details

1. 사용자의 직접 지시

2. 저장소의 실제 코드와 내용

3. 이 디자인 시스템

4. 검증된 참고 자료(IBM)

### Additional change rules

- 색·간격을 바꾸면 이 문서와 코드를 함께 바꾼다

- 실제 고객 작업 시 회사 정보와 사진 출처를 다시 확인한다
