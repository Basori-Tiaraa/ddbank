import { MotionConfig } from 'motion/react'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Steps from './components/Steps.jsx'
import Compare from './components/Compare.jsx'
import Roadmap from './components/Roadmap.jsx'
import TryIt from './components/TryIt.jsx'
import SiteFooter from './components/SiteFooter.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <main>
        <Problem />
        <Steps />
        <Compare />
        <Roadmap />
        <TryIt />
      </main>
      <SiteFooter />
    </MotionConfig>
  )
}
