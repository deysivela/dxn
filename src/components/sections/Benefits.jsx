import { useReveal } from '../../hooks/useReveal'
import { BENEFITS } from '../../data/benefits'
import BenefitCard from '../ui/BenefitCard'
import SectionHeader from '../ui/SectionHeader'
import styles from './Benefits.module.css'

export default function Benefits() {
  const [ref, vis] = useReveal(0.08)

  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.orb} aria-hidden="true" />

      <div ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title={<>Beneficios que <em>sientes</em></>}
          subtitle="No es solo una bebida. Es un bienestar respaldado por décadas de investigación en hongos medicinales de clase mundial."
          visible={vis}
        />

        <div className={styles.grid}>
          {BENEFITS.map((benefit, i) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              delay={`d${Math.min(i + 1, 6)}`}
              visible={vis}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
