import styles from './BenefitCard.module.css'

/**
 * BenefitCard — dark glassmorphic card for a single benefit item.
 *
 * Props:
 *   benefit — { icon, title, desc }
 *   delay   — stagger class
 *   visible — boolean from useReveal
 */
export default function BenefitCard({ benefit, delay = '', visible = false }) {
  const { icon, title, desc } = benefit
  return (
    <div className={`${styles.bezel} reveal ${delay} ${visible ? 'vis' : ''}`}>
      <div className={styles.inner}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  )
}
