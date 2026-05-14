import '../styles/animations.css'
import Hero       from '../components/sections/Hero'
import Products   from '../components/sections/Products'
import Benefits   from '../components/sections/Benefits'
import Location   from '../components/sections/Location'
import CTA        from '../components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Benefits />
      <Location />
      <CTA />
    </>
  )
}
