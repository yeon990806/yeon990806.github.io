---
title: 'yeon.dev — 개인 블로그·포트폴리오'
description: 'Next.js로 만들었던 옛 블로그를 Astro로 전면 재작성. 글래스모피즘 + 오로라 배경.'
period: '2026.06 - 진행 중'
role: '개인'
status: 'wip'
tags: ['Astro', 'Tailwind v4', 'TypeScript', 'GitHub Pages']
featured: true
pubDate: '2026-06-21'
demoUrl: 'https://yeon990806.github.io'
repoUrl: 'https://github.com/yeon990806/yeon990806.github.io'
draft: true
---

> 이 페이지는 이 사이트 자체에 대한 케이스 스터디입니다. 본인이 직접 작성한 내용으로 교체하거나 삭제하세요.

## 한 줄 요약

개발 / 일상 / 포트폴리오를 한 사이트에서 정돈된 작업실 결로 운영하기 위해, 노후화된 Next.js 블로그를 Astro 6 + Tailwind v4로 통째 재작성.

## 상황

- 기존 블로그(Next.js 14)는 4년 차에 접어들며 의존성 노후화와 디자인 피로감 누적
- 개발 + 일상 + 포트폴리오를 따로 관리하던 채널을 한 곳으로 통합 필요
- 채용 담당자·미래의 나·동료 — 세 독자가 모두 만족할 수 있는 구조 필요

## 결정

### Astro 채택 (vs Next.js 유지)

콘텐츠 중심 사이트라 *"필요한 곳만 JS 보내기"* 가 본질. Astro Islands가 가장 잘 맞음.

### 글래스모피즘 + OKLCH 오로라

라이트는 파스텔, 다크는 네이비 오로라로 톤 분리. OKLCH 색공간으로 banding 없이.

### React 미채택 (vanilla JS)

블로그 인터랙션은 vanilla로 충분. 번들 절약.

## 결과

- 첫 빌드 ~4초, 정적 산출물 5페이지(초기) → 콘텐츠 추가 시 자동 확장
- Lighthouse 점수는 1차 오픈 후 측정

## 배움

후속 글로 기록 예정.
