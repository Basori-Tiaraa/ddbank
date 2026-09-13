import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { ease } from '../motion.jsx'

const LINKS = [
  { href: '#problem', label: '왜 필요한가', no: '01' },
  { href: '#how', label: '탐지 · 지연 · 구출', no: '02' },
  { href: '#compare', label: '기존 대응과 차이', no: '03' },
  { href: '#roadmap', label: '도입 단계', no: '04' },
  { href: '#try', label: '목업 체험하기', no: '05' },
]

function ShieldMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
      <path d="M13 2.5 4 6.2v6c0 5.4 3.8 9.6 9 10.8 5.2-1.2 9-5.4 9-10.8v-6L13 2.5Z" fill="#0E0F0F" />
      <path d="m9.2 13 2.7 2.7 5-5.2" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DotGrid() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <circle cx="3" cy="3" r="1.6" />
      <circle cx="9" cy="3" r="1.6" />
      <circle cx="3" cy="9" r="1.6" />
      <circle cx="9" cy="9" r="1.6" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <motion.nav
      className="nav"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="nav-left">
        <a className="logo" href="#top" aria-label="든든뱅크 처음으로">
          <ShieldMark />
          <span className="logo-text">든든뱅크</span>
        </a>

        <div className="menu-wrap" ref={wrapRef}>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-circle">
              <Plus size={12} strokeWidth={3} />
            </span>
            <span className="menu-text">메뉴</span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                id="site-menu"
                className="menu-panel"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.35, ease }}
              >
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)}>
                      <span>{l.label}</span>
                      <small>{l.no}</small>
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="tags-pill">
          <span>행동경제학 넛지</span>
          <span>경찰청 API 연동</span>
        </div>
      </div>

      <div className="nav-right">
        <a className="action-pill" href="#try">
          <span className="action-circle">
            <DotGrid />
          </span>
          <span className="action-label">목업 체험하기</span>
        </a>
      </div>
    </motion.nav>
  )
}
