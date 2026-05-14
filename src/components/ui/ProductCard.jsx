import styles from './ProductCard.module.css'

export default function ProductCard({ product, delay = '', visible = false }) {
  const {
    name, tag, benefits, prep, prices, price,
    img, imgFallback, accent, badge,
  } = product

  function handleImgError(e) {
    if (imgFallback) e.target.src = imgFallback
  }

  return (
    <article className={`${styles.bezel} reveal ${delay} ${visible ? 'vis' : ''}`}>
      <div className={styles.card}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <p className={styles.tag} style={{ color: accent }}>{tag}</p>
          <h3 className={styles.name}>{name}</h3>
        </div>

        {/* ── Image ── */}
        <div className={styles.imgWrap}>
          <img
            src={img}
            alt={name}
            className={styles.img}
            onError={handleImgError}
            loading="lazy"
          />
          <div className={styles.imgOverlay} />
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>
          
          {benefits?.length > 0 && (
            <div className={styles.benefitsSection}>
              <ul className={styles.benefits}>
                {benefits.map((b) => (
                  <li key={b} className={styles.benefitItem}>
                    <span className={styles.check} style={{ color: accent }} aria-hidden="true">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Price Section ── */}
          <div className={styles.priceSection}>
            <span className={styles.priceLabel}>Precio</span>
            <span className={styles.priceValue} style={{ color: accent }}>{price}</span>
          </div>
        </div>

      </div>
    </article>
  )
}
