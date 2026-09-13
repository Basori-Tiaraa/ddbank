import { useRef, useState } from 'react'
import { Reveal } from '../motion.jsx'

const SCENARIOS = [
  { key: 'safe', label: '녹색 안전' },
  { key: 'warn', label: '황색 주의' },
  { key: 'danger', label: '적색 위험' },
]

export default function TryIt() {
  const frameRef = useRef(null)
  const [scenario, setScenario] = useState('danger')

  const send = (msg) => frameRef.current?.contentWindow?.postMessage(msg, '*')

  const pick = (key) => {
    setScenario(key)
    send({ type: 'ddbank:scenario', scenario: key })
  }

  return (
    <section className="section section-dark" id="try">
      <div className="wrap try-grid">
        <div className="try-text">
          <Reveal as="p" className="eyebrow"><i />05 목업 체험하기</Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            직접 눌러
            <br />
            보세요
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            실제 계좌를 조회하지 않는 시연용 화면입니다. 계좌 종류를 고른 다음 폰 화면을 눌러 보세요.
          </Reveal>

          <Reveal delay={0.15}>
            <div className="seg" role="radiogroup" aria-label="시연할 계좌">
              {SCENARIOS.map((s) => (
                <button
                  key={s.key}
                  role="radio"
                  aria-checked={scenario === s.key}
                  className={scenario === s.key ? 'on' : ''}
                  onClick={() => pick(s.key)}
                >
                  <i className={s.key} />
                  {s.label}
                </button>
              ))}
            </div>

            <ol className="try-steps">
              <li>「계좌 확인하기」를 누르면 신호등 판정이 나옵니다.</li>
              <li>적색 계좌는 금액 다음 화면에서 확인 버튼이 사라집니다. 문구를 따라 쳐 보세요.</li>
              <li>오른쪽 아래 빨간 안심 버튼을 누르면 112·1332 연결 화면으로 넘어갑니다.</li>
            </ol>

            <div className="try-links">
              <button className="btn btn-light" onClick={() => send({ type: 'ddbank:restart' })}>처음부터</button>
              <a className="btn btn-outline-light" href="mockup/index.html" target="_blank" rel="noreferrer">
                설명 패널 포함 전체 화면
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="try-frame" delay={0.1}>
          <iframe
            ref={frameRef}
            src="mockup/index.html?embed=1&s=danger"
            title="든든뱅크 안심송금 목업"
          />
        </Reveal>
      </div>
    </section>
  )
}
