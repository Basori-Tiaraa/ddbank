import { Reveal } from '../motion.jsx'

const PHASES = [
  {
    no: '01',
    name: '인프라',
    title: '경찰청 사기 의심 계좌 DB를 오픈 API로 개방',
    body: '새 법을 만들거나 큰 예산을 잡기 전에 API부터 엽니다. 은행은 지금 쓰는 앱에 색상 전환과 안내 문구만 붙이면 됩니다.',
  },
  {
    no: '02',
    name: '실증',
    title: '지역 농협·우체국 뱅킹 앱에서 먼저 시범 운영',
    body: '시니어 이용자가 많은 앱에 규제 샌드박스로 먼저 넣고, 실제 데이터로 비용 대비 효과를 확인합니다.',
  },
  {
    no: '03',
    name: '제도화',
    title: '금융소비자보호 실태평가에 가점 신설',
    body: '처음부터 법으로 강제하지 않습니다. 안심 UI를 넣은 은행에 평가 가점을 줘서 스스로 도입하게 합니다.',
  },
]

export default function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow"><i />04 도입 단계</Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            작은 곳부터
            <br />
            세 단계로 넓힙니다
          </Reveal>
        </div>

        <ol className="roadmap">
          {PHASES.map((p, i) => (
            <Reveal as="li" className="phase" key={p.no} delay={i * 0.1}>
              <span className="phase-no num">{p.no}</span>
              <span className="phase-name">{p.name}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
