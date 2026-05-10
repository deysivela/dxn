import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Productos',   href: '#dxn-catalogo' },
  { label: 'Beneficios',  href: '#beneficios'   },
  { label: 'Contacto',    href: '#cta'          },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  /* Detect scroll for subtle shadow enhancement */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function closeMenu() { setMenuOpen(false) }

  return (
    <>
      <nav className={`${styles.pill} ${scrolled ? styles.scrolled : ''}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={closeMenu}>DXN</a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button href="#cta" size="sm" icon="→" className={styles.ctaBtn}>
          Comprar Ahora
        </Button>

        {/* Hamburger — mobile only */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        onClick={closeMenu}
      >
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <li
              key={href}
              className={styles.mobileItem}
              style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : '0s' }}
            >
              <a href={href} className={styles.mobileLink} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
          <li
            className={styles.mobileItem}
            style={{ transitionDelay: menuOpen ? `${0.08 + NAV_LINKS.length * 0.06}s` : '0s' }}
          >
            <Button href="#cta" size="lg" icon="→" onClick={closeMenu}>
              Comprar Ahora
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}
