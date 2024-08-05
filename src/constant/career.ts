import { CareerHistoryType } from "@/libs/types";

export const CAREER_YEAR = new Date().getFullYear() - 2020;

export const CAREER_HISTORY: CareerHistoryType[] = [
  {
    company: '(주) 투네이션',
    range: `2021.02 ~`,
    experiences: [
      {
        title: '투네 AD 관리자 UI Kit',
        date: '2024.07',
        desc: `투네 AD 관리자 프로젝트에서 HTML5 Custom Element를 제작한 프로젝트입니다.
프로젝트의 원래 목표는 프론트엔드 개발자가 부재한 팀에서 관리자 페이지를 쉽게 만들 수 있도록 스타일을 만들어 전달하는 것이었습니다.
하지만 프론트엔드 개발자가 부재한 상황에서 빠르게 프로젝트를 진행하려면 Custom Elements가 더 적합하겠다는 판단이 들어 커스텀 엘리먼트로 제공하게 되었습니다.
이 프로젝트는 실무에서 처음으로 CustomElements API를 사용했으며, 이를 통해 shadow DOM, CustomElements, custom event 등의 핵심 개념을 깊이 있게 이해할 수 있었습니다.
모든 기능 정의와 디자인이 완성되지 않은 상황에서 프론트엔드 개발자가 부재한 팀에 UI Kit를 제공을 해야 했기에 높은 수준의 추상화와 다양한 기능의 커스터마이징 가능성을 염두에 두고 개발을 진행했습니다.
텍스트 에디터를 구현할 때 "Quill"이라는 라이브러리를 사용했고, 이를 커스텀 엘리먼트가 도큐먼트에 연결되는 시점에 임포트하면서 여러 개의 텍스트 에디터를 사용할 때 에러가 발생했습니다.
에러의 원인은 같은 스크립트를 여러번 불러오는 것이었고, 이 문제를 해결하기 위해 전역에서 해당 스크립트가 로드되었는지 여부를 검사하는 로직을 추가했는데 더 좋은 해결 방법이 있지 않을까 하는 아쉬움이 남습니다.`
      },
      {
        title: '투네이션 플레이 웹 2차 개발',
        date: '2024.05 ~ 2024.06',
        desc: `TOP 50 추천 LIVE STREAM 리스트 조회 기능이 단순 GET으로 불러오는 엔드포인트로 제공되었는데, 이로 인해 캐싱되어 실시간으로 변경되는 데이터가 화면 상에 반영되지 않는 이슈가 있었습니다.
그동안 반드시 캐싱되지 않아야 하는 경우를 만나보지 못하여 해결할 때까지 오랜 시간이 걸렸으나, 공식 도큐먼트의 Route Segment Config 파트를 참고하여 해결했습니다.
`
      },
      {
        title: '투네AD 클라이언트 리모컨',
        date: '2024.04',
        desc: `투네애드 프로젝트의 일정상 이슈로 클라이언트 리모컨 작업에 중도 투입되었습니다.
UI 개발과 API 연동 작업을 맡았으며, 하기 프로젝트에 연장되어 좀더 Vue스럽게 코드를 작성할 수 있도록 노력했습니다.
`
      },
      {
        title: '투네이션 치지직 리모컨',
        date: '2024.04',
        desc: `새로 오픈한 인터넷 방송 플랫폼 치지직에서 투네이션의 기능을 사용할 수 있도록 리모컨에 UI개발과 API를 연결했습니다.
리모컨은 모두 Vue2로 작성되었고 클라이언트 리모컨은 electron을 사용하여 만들어졌습니다.
React를 주력으로 사용하다 보니, Vue의 emit을 사용하지 않고 함수를 props로 주고 받는 형태로 컴포넌트를 만드는 저를 발견할 수 있었습니다.
그래서 다시 도큐먼트를 보며 리마인드하면서 작업을 진행했고, 좀더 vue에 맞는 코드를 만들어낼 수 있었습니다.
`
      },
      {
        title: '투네이션 클라이언트 리모컨 리뉴얼 Flutter POC',
        date: '2024.01 ~ 2024.02',
        desc: `클라이언트 리모컨의 리뉴얼 가능성이 대두되어 Flutter로 프로젝트를 진행할 수 있을지 POC를 진행했습니다.
당시 트위치를 포함한 웹 로그인, 투네이션 API 연결, 영상 후원의 경우 유튜브 미리보기, 항상 위에 창을 띄우기 등의 핵심 기능을 사전 구현해보았습니다.
상태 관리를 위한 bloc 패턴에 대한 많은 공부와 실무경험을 쌓을 기회였습니다.
  `
      },
      {
        title: '투네이션 프론트엔드 언어팩 업데이트',
        date: '2023.12 ~ 2024.01',
        desc: `회사에서 ISMS 인증을 받게 되어 기존의 언어팩 시스템을 업데이트하게 되었습니다.
xlsx 파일을 json 파일로 변환할 때에 옵션 키에 따라서 동작을 달리 해야 했고, 정산, 스트리머, 도네이터, 그리고 이 모든 프로젝트에서 공통으로 사용하는 시트를 json 파일로 추출되도록 했습니다.
프로젝트 특성상 ', ", 등의 텍스트가 기존에 너무 많았기 때문에 당초 생각했던 csv를 포함한 파일로 쉽게 cell을 분리가 되지 않았지만, row를 나눌 때의 특징, 그리고 기존 번역 시트에서 사용되지 않는 패턴을 파악하여 셀을 분리, 완성했습니다.`
      },
      {
        title: '투네이션 정산 개편 프로젝트',
        date: '2022.02 ~ 2022.06',
        desc: `기존 정산 서비스를 react 기반으로 새롭게 만들어내는 프로젝트였습니다.
비교적 연차가 낮은 동료들과 합을 맞추게 되어 특히 커뮤니케이션에도 많이 관심을 쏟았습니다.
일정이 생각보다 빠듯하게 잡혀 지속적으로 변하는 기획 속에서 디자이너와 BE 개발자 분들과 유지적으로 소통하고, 후배 개발자들이 반복적으로 사용한 코드를 공통화하며 유지보수가 용이하도록 수정하는 한편 개발이 한층 수월하게 할 수 있었습니다.
기존 목표 프로젝트 종료 일정보다 2주 정도 빠르게 마칠 수 있었습니다.
`
      },
      {
        title: '투네이션 및 투네이션 해외 서비스 유지 보수 및 기능 개발',
        date: '2021.10 ~ 2022.01',
        desc: `현재는 서비스를 종료한 i-on 서비스를 유지 보수했습니다. 국내 서비스에만 존재하는 기능을 이식하거나, 또는 해외 사정에 맞게 수정하고 해외 서비스에만 추가될 기능을 개발하였습니다.
리액트를 실무에서 처음 사용했던 프로젝트입니다.        
`
      },
      {
        title: '가챠온 프로젝트',
        date: '2021.03 ~ 2021.09',
        desc: `코로나 언택트 시대에 당시 유행이었던 뽑기를 인터넷에서 구현해보면 어떨까? 하는 아이디어에서 시작된 프로젝트입니다.
레트로 게임답게 만들어진 디자인에서 현대적으로 변화하고 기획과 디자인이 자주 바뀌어 어려움을 느꼈던 기억이 있습니다.
처음 컴포넌트를 제작할 때에는 해당 화면과 기능에 맞게 타이트하게 컴포넌트를 만들어 확장이 어렵게 컴포넌트를 만들었으나, 지속적인 디자인 변경과 기능 변경을 겪으며
컴포넌트를 좀 더 추상화해야겠다는 깨달음을 여기서 얻을 수 있었습니다.
더 추상화하고 확장성을 크게 넓히며 잦은 변경에도 수월하게 대응할 수 있었습니다.
`
      },
      {
        title: '퀴즈킹 프로젝트',
        date: '2021.02',
        desc: `토스와 유사하게 광고 또는 상품페이지를 열람한 뒤, 특정 키워드를 입력하면 포인트를 제공하고 사용자는 그 포인트를 현금으로 바꿀 수 있는 앱의 프론트엔드 개발을 맡았습니다.
디자인을 적용할 때 토스를 많이 참고했던 기억이 있습니다.
`
      }
    ]
  },
  {
    company: '알파이글루 /\n(주) 에프티앤씨',
    range: '2020.03 ~ 2021.01',
    experiences: [
      {
        title: '알파키친 식사주문 서비스',
        date: '2020.09 ~ 2020.11',
        desc: `상기 이슈를 이유로 새로이 앱을 만들게 되었습니다.
고객사에서는 식사 주문 및 환불 처리, 식수 파악 기능과 함께 고객사, 납품업체, 제휴사 모두 현황을 판단할 수 있도록 관리자 페이지를 함께 요구했습니다.
당시 앱스토어에서 배달 관련 앱을 모조리 다운받아 UI/UX를 살펴본 기억이 납니다.
회사에서 이 서비스를 좀더 확대하여 BM화하고 싶어 했고, 그래서 좀더 배달앱과 비슷한 기능들을 추가하게 되었습니다.
이때에 UX와 기획에 경험을 쌓을 수 있었습니다.`
      },
      {
        title: 'PHP Code Igniter 기반 프로젝트 유지 보수 및 기능 개발',
        date: '2020.08',
        desc: `사측에서 외주를 맡겨 만들어진 웹앱이었으나 기능 정의가 제대로 안 되어 있어 미진한 부분이 많았습니다.
환불 처리 등에서 발생한 이슈를 처리하고, 식사 주문을 할 때에 UX가 불편하다는 소비자들의 의견을 받아 그부분을 개선했고 고객사측에 좋은 반응을 얻을 수 있었습니다.
그런데 9월 식사 주문을 받는 시점에 오류가 발생하여 기존 프로젝트를 디버깅한 결과, 해당 월의 일자를 계산하는 php 코드에서 날짜가 마지막 날짜가 31로 고정되어 있음을 발견했습니다.
7월 오픈한 서비스였고, 7월 8월은 모두 31일이 말일이기 때문에 발생하지 않은 이슈였습니다.
마지막 일자를 구하도록 하여 수정했고 9월 식사 주문을 제대로 받을 수 있었습니다.`
      },
      {
        title: '캠을 이용한 순공부시간 체크 기능 구현 검토',
        date: '2020.06 ~ 2020.07',
        desc: `고객사에서 "열정을 품은 타이머"의 공부시간 체크 기능을 벤치마킹하여 캠을 통해 공부시간을 체크할 수 있는지 기술 검토를 요청하여 진행했습니다.
고객사에서 매 주말, 학생들의 순공부 시간을 체크하여 순위권 학생들에게 상품 등을 지급하는 행사를 할 때에 사원분들이 주말에도 출근하며 모니터링을 하는데 이부분을 일정부분 자동화하고 싶다는 요청이었습니다.
사람의 움직임을 파악하기 위해 tensorflow를 이용했고, zoom을 통해 실시간으로 체크할 수 있는지 기술검토를 했습니다.
어느정도의 움직임으로 얼마나 움직이지 않아야 공부를 하지 않는 건지 기준을 세우는게 어려웠고 펜의 움직임 정도로는 손 부분의 값이 크게 변하지 않는 부분, 그리고 조는 것과 집중할 때의 머리 움직임등을 당시에 제대로 판단하기 어려웠습니다.
다시 생각해도 학생들에게 굉장히 미안한, 비인도적인 프로젝트가 아니었나 싶습니다.
`
      },
      {
        title: '잇올 홈페이지 리뉴얼 퍼블리싱',
        date: '2020.03 ~ 2024.04',
        desc: `인터렉티브한 움직임으로 랜딩 페이지에 사용자의 주목도를 높였습니다.`
      }, 
    ]
  },
  {
    company: '(주) 인젠트',
    range: '2017.09 ~ 2020.02',
    experiences: [
      {
        title: 'i-biz 사내 ERP',
        date: '2019.05 ~ 2020.02',
        desc: `jQuery와 spring boot 기반의 300명 규모 회사의 사내 ERP 프로젝트에서 풀스택 개발자 및 퍼블리셔로 참여했습니다.
회원 관리, 메뉴 관리 등 서비스 전체의 요소를 컨트롤 하는 화면과 게시판, 그리고 기안서 관련 기능을 개발했습니다.
`
      },
      {
        title: 'IBK 기업은행 차세대 VTM 프로젝트 메인 퍼블리싱',
        date: '2019.01 ~ 2019.03',
        desc: `IBK 기업은행 차세대 VTM 프로젝트의 일정 이슈로 긴급 투입되었습니다.
수백개의 html 파일에 각기 다르게 적용된 스타일로 인해 버튼 위치나 스타일, 폰트 등이 모두 상이했던 이슈와 프로젝트 완료기한이 다가옴에도 여전히 만들어지지 않은 화면들이 많아 이부분을 작업했습니다.
많은 화면에서 공통으로 쓰이는 css와 각 화면에 쓰이는 css가 겹치는 일이 많아 당시에 BEM 방법론을 채택하여 스타일시트를 정리하게 되었고, 프로젝트 기한 내에 무사히 완료할 수 있었습니다.
`
      },
      {
        title: 'iXeb HTML5 WYSIWYG Framework 기능 개발',
        date: '2018.08 ~ 2018.12',
        desc: `HTML5 기반 WYSIWYG Framework의 기능 몇가지를 맡아 개발했습니다.`
      },
      {
        title: '국민은행 차세대 프로젝트 POC 메인 퍼블리싱',
        date: '2018.07 ~ 2018.08',
        desc: `선임 퍼블리셔 분께서 퇴사를 결정하시며 중간에 급하게 투입되었습니다.
IE10 버전부터 최신 브라우저까지 사용자가 모두 같은 경험을 할 수 있도록 만드는데 크게 비중을 두었습니다.
경쟁사의 디자인에 비해 기존 디자인이 투박하다는 내부 평가로 인해 새로 디자인을 하게 되었고 POC에서 선정되는데 기여할 수 있었습니다.
`
      },
      {
        title: '사내 프로젝트 퍼블리싱',
        date: '2017.09 ~ 2019.04',
        desc: '개인택시공제조합, 도서관, 공공기관 등의 프로젝트에서 메인 퍼블리싱 역할을 수행했습니다.'
      }
    ]
  }
];