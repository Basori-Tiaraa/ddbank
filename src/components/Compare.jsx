import { Reveal } from '../motion.jsx'

const ROWS = [
  ['경찰이 개입하는 시점', '피해가 난 뒤 112 신고가 들어온 다음', '앱에서 송금 버튼을 누르기 직전'],
  ['막는 수단', '계좌 지급정지, 대포통장 명의자 추적', '경찰청 DB 연동 API와 넛지형 UI'],
  ['경찰 행정력', '사건마다 수사 인력을 따로 투입', '시스템이 먼저 막아 발생 건수 자체를 줄임'],
]

export default function Compare() {
  return (
    <section className="section" id="compare">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow"><i />03 기존 대응과 차이</Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            신고를 기다리지 않고
            <br />
            보내기 전에 막습니다
          </Reveal>
        </div>

        <Reveal className="compare" delay={0.1}>
          <div className="compare-row compare-head" role="row">
            <span />
            <span>지금의 사후 대응</span>
            <span>든든뱅크 사전 방어</span>
          </div>
          {ROWS.map(([k, before, after]) => (
            <div className="compare-row" role="row" key={k}>
              <span className="compare-k">{k}</span>
              <span className="compare-before">
                <em>지금</em>
                {before}
              </span>
              <span className="compare-after">
                <em>제안</em>
                {after}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
