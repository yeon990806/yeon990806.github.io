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
이 프로젝트는 실무에서 처음으로 CustomElements API를 사용했으며, 이를 통해 shadow DOM, CustomElements, custom event 등의 핵심 개념을 깊이 있게 이해할 수 있었습니다.
프로젝트의 목표는 프론트엔드 개발자가 부재한 팀에서도 쉽고 간단하게, 그리고 빠르게 사용할 수 있는 컴포넌트를 제작하는 것이었습니다. 이를 위해 높은 수준의 추상화와 다양한 기능의 커스터마이징 가능성을 염두에 두고 개발을 진행했습니다.
이 목표를 달성하기 위해 높은 수준의 추상화와 다양한 기능을 커스터마이징할 수 있는 여지를 많이 두었습니다.
CSS와 JS를 각각 하나의 파일로 제공하는 빌드 스크립트를 작성하면서, assets의 경로를 CDN의 상대 경로로 변경하는 부분을 놓친 경험이 있습니다.
다소간의 우여곡절 끝에 빌드 스크립트를 수정하여 해당 이슈를 수정한 기억이 인상적으로 남았습니다.
텍스트 에디터를 구현할 때는 "Quill"이라는 라이브러리를 사용했고, 이를 커스텀 엘리먼트에 임포트하면서 여러 개의 텍스트 에디터를 사용할 때 발생하는 에러를 경험했습니다.
이 문제를 해결하기 위해 전역에서 해당 스크립트가 로드되었는지 여부를 검사하는 로직을 추가했는데, 더 좋은 해결 방법이 있지 않을까 하는 아쉬움이 남습니다.`
      },
      {
        title: '투네이션 플레이 웹',
        date: '2024.06',
        desc: ''
      }
    ]
  },
  {
    company: '알파이글루 / (주) 에프티앤씨',
    range: '2020.03 ~ 2021.01',
    experiences: []
  },
  {
    company: '(주) 인젠트',
    range: '2017.09 ~ 2020.02',
    experiences: []
  }
];