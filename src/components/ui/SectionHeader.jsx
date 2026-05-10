import Eyebrow from './Eyebrow'
import styles from './SectionHeader.module.css'

/**
 * SectionHeader — reusable section title block.
 *
 * Props:
 *   eyebrow    — small label above the title
 *   title      — JSX or string; supports <em> for italic gold styling
 *   subtitle   — body text below title
 *   align      — 'center' | 'left'  (default: 'center')
 *   light      — boolean, uses light palette for dark backgrounds
 *   visible    — from useReveal
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  visible = false,
}) {
  return (
    <div
      className={`${styles.header} ${align === 'left' ? styles.left : ''} reveal ${visible ? 'vis' : ''}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={styles.title}
        style={{ color: light ? 'var(--cream)' : 'var(--cream)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </div>
  )
}
