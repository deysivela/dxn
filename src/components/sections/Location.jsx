import { useReveal } from '../../hooks/useReveal'
import SectionHeader from '../ui/SectionHeader'
import styles from './Location.module.css'

export default function Location() {
  const [ref, vis] = useReveal(0.1)

  const lat = -16.903940200805664
  const lng = -62.62387466430664
  
  // URL para el iframe de Google Maps
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3810.155!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDU0JzE0LjIiUyA2MsKwMzcnMjUuOSJX!5e0!3m2!1ses!2sbo!4v1715100000000!5m2!1ses!2sbo`

  return (
    <section className={styles.section} id="ubicacion">
      <div ref={ref} className={styles.container}>
        <SectionHeader
          title={<>Visítanos en <em>Santa Cruz</em></>}
          subtitle="Pásate por la cafetería para probar el menú o coordina retiro de productos."
          visible={vis}
        />

        <div className={`${styles.mapWrap} reveal d1 ${vis ? 'vis' : ''}`}>
          <iframe
            src={mapUrl}
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la cafetería DXN en Santa Cruz, Bolivia"
          ></iframe>

          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <span className={styles.icon} aria-hidden="true">📍</span>
              <div>
                <h4 className={styles.infoTitle}>Cafetería DXN</h4>
                <p className={styles.infoText}>Santa Cruz de la Sierra, Bolivia</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon} aria-hidden="true">🕒</span>
              <div>
                <h4 className={styles.infoTitle}>Horario</h4>
                <p className={styles.infoText}>Lun a sáb · 8:00 a 20:00</p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
