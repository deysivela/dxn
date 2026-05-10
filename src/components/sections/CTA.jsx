import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import styles from './CTA.module.css'

export default function CTA() {
  const [ref, vis] = useReveal(0.1)

  return (
    <section className={styles.section} id="cta">
      {/* Atmospheric rings */}
      <div className={styles.orb}   aria-hidden="true" />
      <div className={styles.ring}  aria-hidden="true" />
      <div className={`${styles.ring} ${styles.ring2}`} aria-hidden="true" />

      <div className={styles.content} ref={ref}>
        <div className={`reveal ${vis ? 'vis' : ''}`}>
          <Eyebrow>🚀 Empieza Hoy</Eyebrow>
        </div>

        <h2 className={`${styles.title} reveal d1 ${vis ? 'vis' : ''}`}>
          Transforma<br />
          tu día <em className={styles.titleEm}>con DXN</em>
        </h2>

        <p className={`${styles.sub} reveal d2 ${vis ? 'vis' : ''}`}>
          Únete a millones de personas que ya eligieron el bienestar natural.
          Tu primera compra, una nueva versión de ti.
        </p>
      </div>
    </section>
  )
}
