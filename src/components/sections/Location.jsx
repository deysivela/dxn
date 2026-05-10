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
          title={<>Nuestra <em>Ubicación</em></>}
          visible={vis}
        />

        <div className={`${styles.mapWrap} reveal d1 ${vis ? 'vis' : ''}`}>
          <iframe
            src={mapUrl}
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación DXN"
          ></iframe>
          
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h4 className={styles.infoTitle}>Dirección</h4>
              </div>
            </div>
            
            <a 
              href={`https://www.google.com/maps?q=${lat},${lng}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
