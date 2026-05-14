import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import styles from './CTA.module.css'

const ORDER_WHATSAPP =
  'https://wa.me/59164546058?text=' +
  encodeURIComponent('Hola, quiero hacer un pedido de DXN.')

const PARTNER_WHATSAPP =
  'https://wa.me/59164546058?text=' +
  encodeURIComponent('Hola, quiero información para ser socio DXN.')

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
          <Eyebrow>Pide por WhatsApp</Eyebrow>
        </div>

        <h2 className={`${styles.title} reveal d1 ${vis ? 'vis' : ''}`}>
          Transforma<br />
          tu día <em className={styles.titleEm}>con DXN</em>
        </h2>

        <p className={`${styles.sub} reveal d2 ${vis ? 'vis' : ''}`}>
          Te respondemos en minutos. Coordinamos pedido, entrega y, si quieres,
          el alta como socio para que pagues menos desde la primera compra.
        </p>

        <div className={`${styles.actions} reveal d3 ${vis ? 'vis' : ''}`}>
          <Button
            href={ORDER_WHATSAPP}
            size="lg"
            icon="→"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacer un pedido
          </Button>
          <Button
            href={PARTNER_WHATSAPP}
            variant="ghost"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ser socio DXN
          </Button>
        </div>
      </div>
    </section>
  )
}
