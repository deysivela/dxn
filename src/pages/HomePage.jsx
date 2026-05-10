import '../styles/animations.css'
import Hero       from '../components/sections/Hero'
import DxnCatalog from '../components/sections/DxnCatalog'
import Benefits   from '../components/sections/Benefits'
import Location   from '../components/sections/Location'
import CTA        from '../components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <DxnCatalog />
      <Benefits />
      <Location />
      <CTA />
    </>
  )
}
