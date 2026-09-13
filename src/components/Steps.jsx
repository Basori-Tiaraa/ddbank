import { useEffect, useState } from 'react'
import { Reveal } from '../motion.jsx'

const PHRASE = '경찰청 112 피싱 의심'

// 목업(index.html)의 시연 계좌와 같은 데이터
const LAMP_STATES = [
  { k: 'g', acct: '농협 351-0827-4419-63', verdict: '안전한 계좌입니다' },
  { k: 'y', acct: '신한 110-482-903117', verdict: '최근 거래가 급증한 계좌입니다' },
  { k: 'r', acct: '우리 1002-963-418275', verdict: '사기 의심 계좌입니다' },
]

function LampVisual() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % LAMP_STATES.length), 2200)
    return () => clearInterval(id)
  }, [])

  const s = LAMP_STATES[i]

  return (
    <div className="viz viz-lamp" aria-hidden="true">
      <div className="lamp-house">
        {LAMP_STATES.map((b) => (
          <span key={b.k} className={`lamp-bulb ${b.k} ${b.k === s.k ? 'on' : ''}`} />
        ))}
      </div>
      <div className={`lamp-card ${s.k}`}>
        <span className="lamp-acct num">{s.acct}</span>
        <span className="lamp-verdict">{s.verdict}</span>
      </div>
    </div>
  )
}

function TypingVisual() {
  const [n, setN] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setN((v) => (v >= PHRASE.length + 10 ? 0 : v + 1)), 170)
    return () => clearInterval(id)
  }, [])

  const typed = PHRASE.slice(0, Math.min(n, PHRASE.length))
  const done = n >= PHRASE.length

  return (
    <div className="viz viz-type" aria-hidden="true">
      <div className="type-card">
        <span className="type-hint">따라 입력할 문구</span>
        <span className="type-target">{PHRASE}</span>
        <span className={`type-input ${done ? 'ok' : ''}`}>
          {typed}
          <i className="caret" />
        </span>
        <span className={`type-state ${done ? 'ok' : ''}`}>
          {done ? '문구가 일치합니다' : `${PHRASE.length - typed.length}글자 남았습니다`}
        </span>
      </div>
      <span className="no-confirm">
        <s>확인</s> 버튼 없음
      </span>
    </div>
  )
}

function RescueVisual() {
  return (
    <div className="viz viz-rescue" aria-hidden="true">
      <div className="fab">
        <i className="ring" />
        <i className="ring d2" />
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.2 3.5h3.2l1.6 4-2 1.3a11.3 11.3 0 0 0 5.2 5.2l1.3-2 4 1.6v3.2a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 3.2 5.7a2 2 0 0 1 2-2.2Z" />
        </svg>
      </div>
      <div className="call-list">
        <span className="call-row police"><b className="num">112</b>경찰청 · 신고와 지급정지</span>
        <span className="call-row"><b className="num">1332</b>금융감독원 · 피해 상담</span>
      </div>
    </div>
  )
}

const STEPS = [
  {
    id: 'detect',
    tag: '가 · 탐지',
    title: '계좌번호를 넣으면 신호등이 켜집니다',
    body:
      '받는 분 계좌번호를 입력하는 순간 경찰청 사기 의심 계좌 DB, 금융감독원 데이터와 대조합니다. 시니어는 긴 경고문을 잘 읽지 않아서, 누구나 아는 신호등 색으로 결과를 보여 줍니다.',
    list: [
      ['g', '녹색', '문제없는 계좌. 지금처럼 바로 보냅니다'],
      ['y', '황색', '새로 만든 계좌에 이체가 몰림. 팝업으로 한 번 묻습니다'],
      ['r', '적색', '경찰청 블랙리스트 계좌. 화면이 붉게 깜빡이고 진동이 울립니다'],
    ],
    Visual: LampVisual,
  },
  {
    id: 'delay',
    tag: '나 · 지연',
    title: '확인 버튼을 없앱니다',
    body:
      '범인에게 겁먹은 상태에서는 경고 팝업이 떠도 습관처럼 확인을 눌러 넘깁니다. 적색 계좌로 큰돈을 보내려 하면 확인 버튼 자리에 "경찰청 112 피싱 의심"이라는 문구가 뜨고, 이걸 직접 따라 쳐야 넘어갑니다. 송금을 막지는 않되 몇 초 동안 손을 멈추고 다시 생각하게 만듭니다.',
    Visual: TypingVisual,
  },
  {
    id: 'rescue',
    tag: '다 · 구출',
    title: '앱 안에서 바로 112로 연결합니다',
    body:
      '범인과 통화하는 사람에게는 뱅킹 앱을 끄고 전화 앱을 열어 112를 누르는 일부터가 벽입니다. 지연 화면이 뜰 때 아래쪽에 큰 안심 버튼이 함께 나타나고, 누르면 송금이 멈추면서 112(경찰청)나 1332(금융감독원)로 이어집니다.',
    Visual: RescueVisual,
  },
]

export default function Steps() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow"><i />02 탐지 · 지연 · 구출</Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            송금 화면 안에서
            <br />
            세 번 막습니다
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            경찰청이 가진 사기 의심 계좌 정보를 은행 앱에 잇고, 행동경제학의 넛지를 송금 과정에 넣었습니다.
            안전한 송금은 지금처럼 빠르게 두고 위험한 송금에만 일부러 마찰을 둡니다.
          </Reveal>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <article className={`step ${i % 2 ? 'flip' : ''}`} key={s.id}>
              <Reveal className="step-text">
                <span className={`step-tag ${s.id}`}>{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                {s.list && (
                  <ul className="signal-list">
                    {s.list.map(([k, name, desc]) => (
                      <li key={k}>
                        <i className={k} />
                        <b>{name}</b>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
              <Reveal className="step-visual" delay={0.1}>
                <s.Visual />
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
