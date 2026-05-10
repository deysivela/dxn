import styles from './Button.module.css'

/**
 * Button — reusable CTA button with two variants.
 *
 * Props:
 *   variant  — 'primary' | 'ghost'  (default: 'primary')
 *   size     — 'sm' | 'md' | 'lg'  (default: 'md')
 *   href     — if provided, renders as <a>
 *   icon     — emoji or string shown inside the trailing icon bubble
 *   onClick  — click handler
 *   children — button label
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  onClick,
  children,
  className = '',
  ...rest
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ')

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.iconWrap}>{icon}</span>}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
