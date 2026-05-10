import styles from './Eyebrow.module.css'

/**
 * Eyebrow — small pill-shaped label used above section headings.
 *
 * Props:
 *   children — label text
 *   className — extra classes
 */
export default function Eyebrow({ children, className = '' }) {
  return (
    <span className={[styles.eyebrow, className].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}
