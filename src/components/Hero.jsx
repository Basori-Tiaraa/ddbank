import { motion } from 'motion/react'
import Navbar from './Navbar.jsx'
import { ease } from '../motion.jsx'

const up = (y, delay, duration = 0.8) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease, delay },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Navbar />

      {/* 배경 영상 자리: 목업이 스스로 탐지→지연→구출을 반복 재생한다 */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
        aria-hidden="true"
      >
        <div className="hero-glow">
          <i className="g" />
          <i className="y" />
          <i className="r" />
        </div>
        <iframe
          className="hero-frame"
          src="mockup/index.html?embed=1&demo=1"
          title="든든뱅크 자동 시연"
          tabIndex={-1}
        />
      </motion.div>

      <div className="hero-spacer" />

      <motion.div className="hero-footer" {...up(20, 0.5, 1)}>
        <div className="hero-left">
          <motion.p className="hero-sub" {...up(16, 0.6)}>
            <i />
            P-커리어캐치Ⅱ · 시니어노믹스 정책 제안
          </motion.p>

          <motion.h1 className="hero-title" {...up(20, 0.8)}>
            보내기 직전,
            <br />
            한 번 더 멈추게.
          </motion.h1>

          <motion.div className="hero-actions" {...up(16, 1.0)}>
            <a className="btn btn-dark" href="#how">작동 방식 보기</a>
            <a className="btn btn-outline" href="#try">목업 체험하기</a>
          </motion.div>
        </div>

        <div className="hero-tags">
          <span className="tag">탐지</span>
          <span className="tag">지연</span>
          <span className="tag">구출</span>
        </div>
      </motion.div>
    </section>
  )
}
