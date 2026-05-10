import { useReveal } from '../../hooks/useReveal'
import { HERO_CUPS } from '../../data/products'
import Button from '../ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
  const [ref, vis] = useReveal(0.05)

  return (
    <section className={styles.hero}>
      {/* Layered backgrounds */}
      <div className={styles.bg} />
      <div className={styles.vignette} />
      <div className={styles.slash} />

      <div className={styles.inner} ref={ref}>

        {/* ── LEFT: Copy ── */}
        <div className={styles.left}>
          <h1 className={`${styles.h1} reveal d1 ${vis ? 'vis' : ''}`}>
            Disfruta lo mejor,<br />
          </h1>

          <span className={`${styles.bigWord} reveal d2 ${vis ? 'vis' : ''}`}>
            Frapuchinos
          </span>

          <div className={`${styles.pills} reveal d3 ${vis ? 'vis' : ''}`}>
            <span className={styles.pill}>☕ Café Caliente</span>
            <span className={styles.pill}>☕ Café Natural</span>
            <span className={styles.pill}>❄️ Café Frias</span>
          </div>

          <p className={`${styles.subtitle} reveal d3 ${vis ? 'vis' : ''}`}>
            Sabor · Bienestar · Energía. Cada sorbo es una fusión de ciencia
            natural y tradición ancestral — potenciada por el poder del
            Ganoderma Lingzhi.
          </p>

          <div className={`${styles.actions} reveal d4 ${vis ? 'vis' : ''}`}>
            <Button href="#dxn-catalogo" size="lg" icon="↗">
              Ver Productos
            </Button>
            <Button href="#beneficios" variant="ghost" size="lg">
              Conocer Beneficios →
            </Button>
          </div>
        </div>

        {/* ── RIGHT: Stacked cups ── */}
        <div className={styles.right}>
          <div className={styles.glow} />
          <div className={styles.cupsGrid}>
            {HERO_CUPS.map((cup, i) => (
              <div
                key={i}
                className={`${styles.cup} ${styles[`cup${i}`]}`}
              >
                <img
                  src={cup.img}
                  alt={cup.label}
                  className={styles.cupImg}
                  loading="eager"
                  onError={e => {
                    e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80'
                  }}
                />
                <span className={styles.cupLabel}>{cup.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
