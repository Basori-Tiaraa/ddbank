import { motion } from 'motion/react'

export const ease = [0.16, 1, 0.3, 1]

/** 스크롤로 화면에 들어올 때 한 번 아래에서 올라오는 래퍼 */
export function Reveal({ as = 'div', delay = 0, y = 24, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
