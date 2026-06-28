# 이미지 가이드 — bar-manager-planning

이 폴더에 들어갈 이미지 목록. 글의 순서대로 정리됨.

권장 사양:
- **가로**: 1600px 이상 (retina 대응)
- **포맷**: png(스크린샷) / jpg(사진) — 사진은 80% 품질로 압축
- **파일 크기**: 가능하면 500KB 이하

| # | 파일명 | 무엇 | 어디서 찍나 |
|---|---|---|---|
| 00 | `00-hero.jpg` | 대문 hero — 분위기 사진 또는 대시보드 mockup | 홈바 사진 또는 좌석 운영 모드 스크린샷 |
| 01 | `01-homebar.jpg` | 진·위스키·리큐르가 들어찬 홈바 선반 사진 | 실제 홈바 또는 자료 사진 |
| 02 | `02-personas.png` | 두 페르소나 비교 다이어그램 | 간단한 도식 — 홈바 호스트(좌) vs 바 사장(우) + 공통 코어 |
| 03 | `03-operations-view.png` | 좌석 운영 모드 메인 | `/admin/seats` 운영 탭 (진행 중 visit + 빈 좌석) |
| 04 | `04-visit-detail.png` | visit 상세 모달 | 운영 탭에서 카드 클릭 시 |
| 05 | `05-orders-page.png` | 주문 페이지 카드 그리드 | `/admin/orders` 페이지 |
| 06 | `06-sales-page.png` | 매출 통계 — KPI + 막대 그래프 | `/admin/sales` 페이지 |
| 07 | `07-history-table.png` | 데이터 이력 테이블 | `/admin/history` 페이지 |
| 08 | `08-landing.png` | 손님 대문 | `/{handle}` (모바일 뷰포트 380px) |
| 09 | `09-menu-cart.png` | 메뉴 페이지 + 카트 시트 (펼친 상태) | `/{handle}/menu` 카트 담은 상태 |
| 10 | `10-base-option-modal.png` | 기주 옵션 모달 — 선택된 라디오 강조 | 메뉴에서 기주 옵션 있는 메뉴 클릭 |
| 11 | `11-cart-sheet.png` | 카트 시트 접힘/펼침 비교 | 두 상태를 한 이미지에 (좌/우 배치) |
| 12 | `12-seat-qr.png` | 좌석 QR 인쇄용 디자인 | 좌석 페이지 → QR 버튼 → 인쇄 미리보기 |
| 13 | `13-catalog.png` | 칵테일 카탈로그 다이얼로그 | 새 레시피 모달 → 칵테일 찾아보기 |
| 14 | `14-base-alternatives.png` | 레시피 폼의 기주 옵션 편집 영역 | 레시피 편집 모달 → 기주 토글 후 펼침 영역 |
| 15 | `15-qr-approval.png` | PENDING 주문에 수락/거부 버튼 | OrdersPage 진행 중 → 카드 → 상세 모달 (PENDING 상태) |
| 99 | `99-outro.png` | 사장/손님 양쪽 화면 합성 | 둘을 나란히 배치한 mockup |

## 스크린샷 팁

- **모바일 화면** (08, 09, 10, 11): Chrome DevTools → iPhone 14 Pro (393×852)
- **데스크탑 화면** (03~07, 13~15): 1440px 너비에서 캡처
- **다이어그램** (02, 99): Figma 또는 Excalidraw에서 만들고 export

## hero 이미지 (00-hero.jpg)

frontmatter의 `heroImage`가 가리킴. 글 상단 큰 이미지로 노출됨.
- 분위기 있는 홈바·바 사진 (스톡 사진 OK)
- 또는 대시보드 스크린샷
- 가로 1600~2400px, 세로비 16:9 또는 3:2 권장
