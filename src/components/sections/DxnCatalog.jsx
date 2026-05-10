import { useReveal } from '../../hooks/useReveal'
import { DXN_CATALOG } from '../../data/products'
import ProductCard from '../ui/ProductCard'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import styles from './DxnCatalog.module.css'

const PARTNER_WHATSAPP =
  'https://wa.me/59164546058?text=' +
  encodeURIComponent(
    'Hola, quiero ser socio DXN para acceder a precios de mayorista'
  )

export default function DxnCatalog() {
  const [ref, vis] = useReveal(0.08)

  return (
    <section className={styles.section} id="dxn-catalogo">
      <div className={styles.bgLines} aria-hidden="true" />

      <div ref={ref}>
        <SectionHeader
          eyebrow=" Catálogo DXN"
          title={<>Sabores que <em>transforman</em></>}
          visible={vis}
        />

        <div className={styles.grid}>
          {DXN_CATALOG.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={`d${Math.min(i + 1, 6)}`}
              visible={vis}
            />
          ))}
        </div>

        {/* ── Partner CTA ── */}
        <div className={`${styles.partner} reveal d3 ${vis ? 'vis' : ''}`}>
          <div className={styles.partnerInner}>
            <span className={styles.partnerEyebrow}>¿Quieres mejor precio?</span>
            <h3 className={styles.partnerTitle}>
              Hazte <em>socio DXN</em> y accede a precios de mayorista
            </h3>
            <p className={styles.partnerDesc}>
              Como socio obtienes descuentos exclusivos, bonos por consumo y la
              posibilidad de generar ingresos. Te guiamos por WhatsApp.
            </p>
            <div className={styles.partnerActions}>
              <Button
                href={PARTNER_WHATSAPP}
                size="lg"
                icon="→"
                rel="noopener noreferrer"
                target="_blank"
              >
                 Quiero ser socio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
