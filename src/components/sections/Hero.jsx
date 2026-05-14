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
          <div className={`${styles.eyebrowWrap} reveal d1 ${vis ? 'vis' : ''}`}>
            <span className={styles.eyebrow}>Cafetería DXN · Bolivia</span>
          </div>

          <h1 className={`${styles.h1} reveal d2 ${vis ? 'vis' : ''}`}>
            Café con <br />
            <span className={styles.accentText}>ganoderma</span>
          </h1>

          <p className={`${styles.subtitle} reveal d3 ${vis ? 'vis' : ''}`}>
            Frapuchinos fríos, cafés calientes y malteadas hechos con Ganoderma
            Lingzhi. Una pausa que te despierta y te cuida al mismo tiempo.
          </p>

          <div className={`${styles.actions} reveal d4 ${vis ? 'vis' : ''}`}>
            <Button href="#productos" size="lg" icon="→">
              Ver Productos
            </Button>
            <Button href="#beneficios" variant="ghost" size="lg" icon="→">
              conocer beneficios
            </Button>
          </div>

          <ul className={`${styles.metaList} reveal d5 ${vis ? 'vis' : ''}`} aria-label="Categorías">
            <li className={styles.metaItem}><span className={styles.metaDot} /> Frapuchinos fríos</li>
            <li className={styles.metaItem}><span className={styles.metaDot} /> Cafés calientes</li>
            <li className={styles.metaItem}><span className={styles.metaDot} /> Malteadas vitales</li>
          </ul>
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
                <div className={styles.cupInner}>
                  <img
                    src={cup.img}
                    alt={cup.label}
                    className={styles.cupImg}
                    loading="eager"
                    onError={e => {
                      e.target.src = '/img/capuchino.png'
                    }}
                  />
                  <div className={styles.cupOverlay}>
                    <span className={styles.cupTagline}>{cup.tagline}</span>
                    <span className={styles.cupLabel}>{cup.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
