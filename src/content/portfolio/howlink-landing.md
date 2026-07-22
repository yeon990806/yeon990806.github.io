---
title: WINK 공식 랜딩 사이트
description: WINK 제품을 소개하고 도입 문의 리드를 수집하는 B2B 랜딩 사이트. React + Vite로 만든 SPA에 서비스·요금·법적효력·보안·약관 페이지와 문의 폼을 구성했습니다.
period: 2025.06 – 2026.06
role: Frontend
status: live
tags: [React, TypeScript, Vite, Tailwind, styled-components, Netlify, 랜딩]
heroImage: ./howlink-landing/showcase.jpg
demoUrl: https://about.workerlink.ai
featured: false
pubDate: 2026-03-10
---

HOWLINK의 B2B HR SaaS **WINK**를 소개하는 공식 랜딩/마케팅 사이트입니다. 제품 소개, 요금 안내, 전자계약의 법적 효력, 보안, 고객센터, 그리고 **도입 문의를 통한 리드 수집**까지 담은 SPA입니다. 데스크톱과 모바일 양쪽 뷰포트를 모두 대응합니다.

## 기술 스택

| 영역 | 선택 |
| --- | --- |
| 프레임워크 | React 18 + TypeScript 5.6 |
| 빌드 | Vite 6 (SWC) |
| 라우팅 | react-router (v6 스타일) |
| 스타일 | Tailwind 3 + styled-components 혼용 |
| 애니메이션 | motion (framer-motion 후속) |
| 다이얼로그 | SweetAlert2 |
| 배포 | Netlify |

## 구성

- **Home / Service / Pricing / Legal / Security / Support / Contact** 와 서비스 하위의 근로자 앱 사용 가이드(`/service/app-guide`)
- 이용약관·개인정보·위치기반·마케팅·전자계약 등 **5종 약관 페이지**
- 섹션 단위를 통일하는 공통 컴포넌트(`Container` / `PageSection` / `SectionHeader`)와, "기업 고객 100+ / 근로자 35,000명+" 같은 신뢰 지표를 노출하는 `TrustStats`
- 모바일 메뉴 토글은 `MenuContext`로 전역 공유

## 도입 문의 흐름

핵심 전환 지점인 도입 문의 폼입니다.

- SweetAlert2 모달로 문의 폼(담당자·연락처·추천인 정보 등 7개 필드)을 띄우고, ERP 공개 API로 전송합니다.
  ```http
  POST /root/api/v1/erp/public/erp/joining
  ```
- 성공 시 안내 알림, 실패 시 대체 문의 이메일을 안내하는 폴백을 두었습니다.
- 회원가입 CTA(`onClickRegister`)는 ERP 회원가입 페이지로 연결됩니다.

문의 API 경로(`/root/*`)는 **개발에서는 Vite proxy, 운영에서는 Netlify redirect**로 ERP에 프록시됩니다. 두 환경의 프록시 설정이 어긋나면 로컬은 되는데 운영만 안 되는 종류의 문제가 생기기 때문에, 이 경계를 명확히 관리하는 것이 중요했습니다.

## 운영에서 다룬 것

- **대소문자 혼재 폴더명** — Windows에서는 문제없지만 Netlify(리눅스) 빌드에서는 import 경로의 대소문자 일치가 중요해서, 이름 변경 시 `git mv`로 케이스를 명시적으로 다뤘습니다.
- **외부 ERP 의존** — 도입 문의와 회원가입 모두 `erp.workerlink.ai`에 의존하므로, ERP 점검이 곧 폼 실패로 이어진다는 점을 전제로 폴백을 설계했습니다.
- Tailwind와 styled-components가 혼용된 코드베이스라, 새 컴포넌트는 주변 컨벤션을 따르며 두 방식의 역할 경계를 유지했습니다.

가장 앞단에서 제품의 첫인상과 전환을 담당하는 화면이라, 기술적 완성도와 함께 무엇을 보여주고 어디로 유도할 것인가를 같이 고민한 프로젝트였습니다.
