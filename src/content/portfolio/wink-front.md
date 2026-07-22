---
title: WINK — 전자계약 · 근태 통합 ERP
description: 인력 파견·근로계약·전자계약·근태·정산을 하나로 묶은 B2B ERP의 관리자/사용자 웹 클라이언트. 전자계약 v2 위젯 에디터와 크레딧 결제 흐름을 설계·구현했습니다.
period: 2025.01 – 2026.06
role: Frontend (설계 · 구현)
status: live
tags: [React, TypeScript, MUI Joy, Recoil, 전자계약, PDF, TossPayments]
heroImage: ./wink-front/hero.jpg
featured: true
pubDate: 2026-06-20
---

일용직 근로자에 특화된 B2B HR SaaS **WINK**의 웹 클라이언트입니다.
인력 파견부터 근로계약·전자계약·근태 관리·급여 정산까지, 실무에서 흩어져 있던 흐름을 한 화면에서 처리하도록 묶은 관리자/사용자용 ERP입니다.

합류 시점에 이미 다른 개발자가 만들어 둔 코드가 있었고, 인수인계 없이 코드를 파악하는 것부터 시작했습니다.
그 상태에서 **전자계약 서식 에디터를 v1에서 v2로 다시 설계**하고, **크레딧 결제 흐름**을 새로 붙이는 것이 제 주된 역할이었습니다.

## 서비스 개요

WINK는 크게 두 도메인으로 나뉩니다.

- **전자계약 (CONTRACT)** — 근로계약서·전자계약서 작성, 서식 관리, 문서 보관함, 계약 통계
- **근태관리 (ATTENDANCE)** — 현장배정·업무할당·근태현황·급여정산·근태대조

둘은 동일한 레이아웃과 세션을 공유하면서 사이드바 메뉴만 분리되는 구조입니다. `page_authority` 문자열(메뉴 코드를 `&`로 나열)에 따라 사용자별로 노출되는 메뉴가 필터링됩니다. 백엔드는 `erp.workerlink.ai`와 JWT Bearer 토큰으로 연동됩니다.

![WINK 전자계약 v2 계약서 서식 목록 화면](./wink-front/list.jpg)

## 기술 스택

| 영역 | 선택 |
| --- | --- |
| 프레임워크 | React 18 + TypeScript 4.9 |
| UI | MUI Joy 기본, 부족한 부분만 MUI Material 보완 + Emotion |
| 상태 | Recoil (사용자·탭·위젯·계약 작성 단계) |
| 라우팅 | react-router-dom v6 (nested route) |
| 계약 캔버스 | react-konva · react-rnd (위젯 좌표 편집) |
| PDF | @react-pdf/renderer · pdfjs-dist |
| 결제 | @tosspayments/payment-widget-sdk |
| 통계 | ECharts · FullCalendar |

빌드는 CRA를 fork한 커스텀 Webpack 5 구조 위에서 동작하고, 상태는 `App.tsx`의 단일 `RecoilRoot`에서 공급됩니다.

## 전자계약 v2 — 위젯 에디터 재설계

v1은 도메인 이해도, 시간 모두 부족한 상태에서 "PDF 위에 위젯 하나 놓기" 수준으로 만든 화면이었습니다. 확대/축소나 위젯 속성 편집이 없었고, 계약자는 `contractor_id: 0 | 1`로 두 명이 코드에 고정되어 있었습니다.

v2는 기획부터 다시 시작했습니다.

- PDF 위에 텍스트·서명·도장·체크박스·날짜 등 **속성 편집이 가능한 위젯**을 얹고, konva 캔버스에서 좌표·크기를 직접 조정합니다.
- 다중 페이지, 다인 서명, 계약자별 팔레트를 전제로 데이터 모델을 다시 설계했습니다.
- 서명/도장 이미지는 `@imgly/background-removal`(브라우저 ONNX)로 배경을 제거해 문서에 합성합니다.
- 서식(템플릿) → 계약 발송 → 서명 → 내역 관리로 이어지는 전체 흐름을 v2 라우트(`template-v2`, `ContractV2`)로 재구성했습니다.

서식으로 발송한 계약은 계약 내역 화면에서 체결/미체결 상태로 추적합니다.

![WINK 전자계약 v2 계약 내역 화면](./wink-front/history.jpg)

이 과정을 별도의 [계약서 서식 마이그레이션 회고](/posts/contract-template-v2-migration/)에 자세히 남겨두었습니다.

## 크레딧 충전 · 결제 흐름

계약/근태 사용량을 크레딧으로 과금하는 구조라, 충전 흐름을 새로 구현했습니다.

- Toss 결제 위젯(`@tosspayments/payment-widget-sdk`)을 붙인 카드 결제와 계좌이체 두 갈래로 나눴습니다.
- `charge → checkout → success/fail`, 계좌이체는 입금 확인까지 이어지는 상태 전이를 라우트로 분리했습니다.
- 잔여 크레딧을 헤더에 실시간 표시(`remainQuantityState`)하고, 관리자(`erp_id === 1`)에게만 입금 확인·크레딧 관리 메뉴를 노출했습니다.

## 까다로웠던 지점

- **v1과 v2의 병존** — 기존 계약 데이터·라우트를 유지한 채로 새 에디터를 얹어야 했고, 신규 기능은 v2 우선으로 유도하면서 폐기 일정을 백엔드와 맞춰갔습니다.
- **토큰 분리** — ERP 세션과 근로자 출퇴근(commute) 세션이 서로 다른 토큰 체계라, axios interceptor에서 경로별로 토큰을 자동 주입하고 401 처리를 분기했습니다.
- **타입 에러 허용 빌드** — `TSC_COMPILE_ON_ERROR=true`로 빌드가 통과하는 관습이 있어, 런타임 사고를 막기 위해 변경 후 별도 타입 체크를 습관화했습니다.

혼자서 도메인 파악 → 기획 → UI/UX → 구현까지 진행한 프로젝트라, 요구사항이 모호할 때 무엇을 먼저 결정해야 하는지를 가장 많이 배운 작업이었습니다.
