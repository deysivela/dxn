import { BENEFITS } from '../../data/benefits'
import BenefitCard from '../ui/BenefitCard'
import SectionHeader from '../ui/SectionHeader'
import styles from './Benefits.module.css'

export default function Benefits() {
  const vis = true

  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.orb} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title={<>Por qué <em>Ganoderma</em></>}
          subtitle="DXN cultiva sus propios hongos medicinales bajo estándares GMP en Malasia. Esto es lo que un consumo regular puede aportarte."
          visible={vis}
        />

        <div className={styles.grid}>
          {BENEFITS.map((benefit, i) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              delay=""
              visible={vis}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
