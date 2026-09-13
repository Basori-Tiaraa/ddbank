import { motion } from 'motion/react'
import { Reveal, ease } from '../motion.jsx'

const SHARES = [
  { key: 'senior', label: '60대 이상', amount: '704억 원', pct: 36.4, tone: 'ink' },
  { key: 'fifty', label: '50대', amount: '560억 원', pct: 29, tone: 'mid' },
  { key: 'rest', label: '그 외 연령', amount: null, pct: 34.6, tone: 'light' },
]

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap problem-grid">
        <div>
          <Reveal as="p" className="eyebrow"><i />01 왜 필요한가</Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            돈이 빠져나간 뒤에는
            <br />
            늦습니다
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            요즘 보이스피싱은 기관을 사칭하는 전화에서 그치지 않습니다. 악성 앱을 깔게 한 뒤 휴대폰을 원격으로
            조작하고 오픈뱅킹으로 돈을 옮깁니다. 빼앗긴 돈은 몇 분 만에 여러 계좌로 쪼개져 빠져나가서, 피해자가
            112에 신고하고 지급정지가 걸릴 즈음이면 잔고는 이미 0원입니다.
          </Reveal>
          <Reveal as="p" className="lead" delay={0.15}>
            복잡한 금융 앱 앞에서 겁을 먹은 시니어는 판단할 틈 없이 범인이 시키는 대로 버튼을 누르게 됩니다.
            지금의 앱 화면은 그 순간을 붙잡아 주지 못합니다.
          </Reveal>
        </div>

        <div className="stats">
          <Reveal className="stat">
            <span className="stat-num">704억 원</span>
            <span className="stat-label">60대 이상 피해액 · 전체의 36.4%</span>
          </Reveal>
          <Reveal className="stat" delay={0.08}>
            <span className="stat-num">560억 원</span>
            <span className="stat-label">50대 피해액 · 전체의 29%</span>
          </Reveal>

          <Reveal className="share" delay={0.16}>
            <div className="share-bar" role="img" aria-label="연령별 피해액 비중: 60대 이상 36.4%, 50대 29%, 그 외 34.6%">
              {SHARES.map((s, i) => (
                <motion.span
                  key={s.key}
                  className={`share-seg ${s.tone}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.25 + i * 0.12 }}
                  style={{ flexGrow: s.pct }}
                />
              ))}
            </div>
            <ul className="share-legend">
              {SHARES.map((s) => (
                <li key={s.key}>
                  <i className={s.tone} />
                  {s.label} <b className="num">{s.pct}%</b>
                </li>
              ))}
            </ul>
            <p className="note">50대 이상이 전체 피해액의 65.4%를 차지합니다. 출처: 금융감독원, 2023년 보이스피싱 피해현황</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
