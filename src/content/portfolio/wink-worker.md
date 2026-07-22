---
title: WINK WORKER — 근로자 출퇴근 앱
description: 근로자가 SMS 인증으로 가입하고 현장에서 GPS·Wi-Fi로 출퇴근을 기록하는 Flutter 모바일 앱. Google Play 정책에 맞춰 백그라운드 위치 추적을 알람 기반으로 재설계했습니다.
period: 2025.01 – 2026.06
role: Mobile (Flutter)
status: live
tags: [Flutter, Dart, Provider, go_router, 네이버지도, Geolocation, 출퇴근]
featured: false
pubDate: 2026-05-20
---

WINK 플랫폼의 **근로자용 모바일 앱**입니다. 관리자 웹(WINK ERP)과 같은 데이터를 공유하면서, 현장 근로자가 직접 사용하는 접점을 담당합니다.

근로자가 SMS 인증으로 가입/로그인하고, 소속(에이전시)과 근무지를 등록한 뒤, 현장에서 GPS·Wi-Fi 기반으로 출근/퇴근을 기록하고 근무 시간을 관리합니다. 외국인 근로자를 위해 9개국 국가 코드를 지원합니다.

## 기술 스택

| 영역 | 선택 |
| --- | --- |
| 프레임워크 | Flutter · Dart 3.6 |
| 상태 | Provider (ChangeNotifier) |
| 라우팅 | go_router (인증 상태 기반 redirect) |
| 네트워크 | http + dio (`WinkApiClient`, 토큰 자동 재발급) |
| 저장소 | flutter_secure_storage(토큰) · shared_preferences(근무 상태) |
| 지도/위치 | flutter_naver_map · geolocator · network_info_plus |
| 알림 | flutter_local_notifications · timezone |

`core`(UI 비의존 서비스·모델·프로바이더)와 `features`(화면)를 분리하고, 대부분의 화면을 `*_screen.dart` 공통 진입 + `*_android.dart` / `*_ios.dart`로 나눠 Material / Cupertino UI를 각각 구현했습니다.

## 핵심 — 출퇴근 위치 확인

근무지의 좌표(`dispatch_latitude/longitude`)와 허용 반경(`limited_distance`)을 기준으로, 근로자의 현재 GPS 위치가 반경 안인지 **Haversine 공식**으로 계산합니다. 네이버 지도에 근무지와 현재 위치를 표시하고, 반경 안일 때만 출/퇴근을 허용합니다. `location_check_type`에 따라 Wi-Fi(SSID/BSSID) 대조 방식으로도 분기합니다.

## Google Play 정책 대응 — 백그라운드 위치 제거

구현에서 특히 주의한 부분입니다.

원래는 실시간 백그라운드 지오펜싱(`ACCESS_BACKGROUND_LOCATION`)으로 이탈을 감지했는데, Google Play 정책상 상시 백그라운드 위치 추적은 심사 리스크가 큽니다. 그래서 알람 기반으로 재설계했습니다.

- 백그라운드 상시 추적 대신, `scheduleInsideCheckAt`으로 지정 시각에만 앱을 깨워 **1회 위치 확인**을 수행합니다.
- Android는 네이티브 정확 알람(`AlarmReceiver`) + MethodChannel(`com.howlink.wink/alarm`)로 호출합니다.
- 근무시간 종료 / 예약 후 1시간 경과 / 당일 이미 확인 등의 경우 호출을 생략하는 가드를 여러 겹 배치했습니다.
- 확인 결과는 `checkWorkingInArea`(in-area Y/N)로 서버에 전송하고, 결과에 따라 로컬 알림을 1회 표시합니다.

실시간 지오펜싱 코드는 삭제하지 않고 주석으로 보존해, 정책이 다시 바뀔 때 되살릴 수 있도록 남겨두었습니다.

## 그 외 다룬 것

- **토큰 자동 재발급** — `AuthProvider`가 만료 5분 전에 토큰을 자동 갱신(최대 3회 재시도)하고, 실패 시 로그아웃합니다.
- **강제 업데이트** — 현재 버전과 스토어 버전을 비교해 필요 시 업데이트 다이얼로그를 띄우고 스토어로 이동시킵니다.
- **근무 이력** — `table_calendar` 기반 일별 근로 캘린더와 주간 근무시간 요약을 제공합니다.

웹 프론트엔드에서 출발해 Flutter 모바일까지, 같은 도메인을 서로 다른 플랫폼에서 일관되게 구현하는 문제를 실제로 다뤄 본 프로젝트입니다.
