import styles from './Footer.module.css'

const COLS = [
  {
    heading: 'Productos',
    links: ['Frapuchinos', 'Cafés Calientes', 'Malteadas', 'Suplementos'],
  },
  {
    heading: 'Empresa',
    links: ['Acerca de DXN', 'Plan de Negocio', 'Distribuidores', 'Contacto'],
  },
  {
    heading: 'Soporte',
    links: ['Cómo Comprar', 'Envíos', 'Preguntas Frecuentes', 'Privacidad'],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Top grid */}
        <div className={styles.top}>

          {/* Brand column */}
          <div className={styles.brand}>
            <span className={styles.brandName}>DXN</span>
            <p className={styles.brandDesc}>
              Distribuidores oficiales en Bolivia. Comprometidos con tu salud
              y bienestar a través del poder de la naturaleza y el Ganoderma Lingzhi.
            </p>
          </div>

          {/* Nav columns */}
          {COLS.map(({ heading, links }) => (
            <div key={heading} className={styles.col}>
              <h4 className={styles.colHeading}>{heading}</h4>
              <ul className={styles.colLinks}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2025 DXN Bolivia · Todos los derechos reservados
          </span>
          <span className={styles.tagline}>Naturaleza en cada sorbo</span>
        </div>

      </div>
    </footer>
  )
}
