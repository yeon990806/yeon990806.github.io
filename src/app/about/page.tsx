/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/components/layout/PageTitle";

const YEAR = new Date().getFullYear() - 2020;

const CAREER = [
  {
    company: '(주) 투네이션',
    range: `2021.02 ~`,
    experiences: [
      {
        title: '투네 AD 관리자 UI Kit',
        desc: '',
        trouble: '',
      }
    ]
  },
  {
    company: '알파이글루 / (주) 에프티앤씨',
    range: '2020.03 ~ 2021.01'
  },
  {
    company: '(주) 인젠트',
    range: '2017.09 ~ 2020.02'
  }
];

const AboutPage = async () => {
return (
    <div className="relative w-full h-full max-w-5xl px-4 mx-auto lg:max-w-6xl lg:px-8">
      <PageTitle
        pageTitle="About me"
        pageDescription=""
      />
      <div className="grid grid-rows-1 gap-4 md:grid-cols-auto-1fr">
        <div className="min-w-[320px] overflow-hidden bg-no-repeat bg-cover bg-center rounded-lg aspect-video bg-profile"></div>
        <p className="leading-relax text-light-gray800 dark:text-dark-gray800">
          안녕하세요. {YEAR - 1}년을 퍼블리셔로, {YEAR}년간 프론트엔드 개발자로 일하고 있는
            <ruby className="text-light-blue500 dark:text-dark-blue500">
              YeON
              <rt className="text-light-gray600 dark:text-dark-gray600">
                김도연
              </rt>
            </ruby>
          입니다.<br />
          사용자 입장에서 먼저 바라보고, 복잡하고 불편한 일을 쉽고 편하게 만드는 일을 좋아합니다. <br />
          변화하는 시대의 흐름에 몸을 맡기고 당장 할 수 있는 것, 그리고 내가 어떻게 더 높은 생산성을 만들어 낼 수 있는가에 집중하려 노력합니다. <br />
          현재는 과거가 모여 만들어진 것이고, 미래는 현재 무엇을 하느냐에 따라 변화한다고 생각합니다. <br />
          더 나은 미래를 위해 현재 노력하고 있는 것을 남기려고 합니다. <br />
          세상에 꿈을 팔고 그것을 설득에 성공해 실제로 수익으로 이어진 회사를 좋아합니다.
        </p>
      </div>
      <div className="mt-6 text-light-gray800 dark:text-dark-gray800">
        <h6 className="p-0 m-0 text-xl font-semibold">
          학력
        </h6>
        <ul className="grid gap-2 mt-2">
          <li>
            단국대학교 (2023 ~, 재학)
          </li>
        </ul>
      </div>
      <div className="mt-6 text-light-gray800 dark:text-dark-gray800">
        <h6 className="p-0 m-0 text-xl font-semibold">
          경력
        </h6>
        <ul className="grid gap-2 mt-2">
          { CAREER.map((item, idx) => (
            <li key={idx}>
              <div>
                <h6>
                  {item.company}
                </h6>
                <div>
                  {item.range}
                </div>
              </div>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;