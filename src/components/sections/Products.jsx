import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/products'
import ProductCard from '../ui/ProductCard'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import styles from './Products.module.css'

const PARTNER_WHATSAPP =
  'https://wa.me/59164546058?text=' +
  encodeURIComponent(
    'Hola, quiero ser socio DXN para acceder a precios de mayorista'
  )

export default function Products() {
  // We set visibility to true by default to avoid issues with scroll-reveal
  const vis = true 

  return (
    <section className={styles.section} id="productos">
      <div className={styles.bgLines} aria-hidden="true" />

      <SectionHeader
        title={<>Catálogo de <em>productos DXN</em></>}
        subtitle="Más de 50 referencias entre cafés, suplementos, tés, bebidas y comida funcional con Ganoderma Lingzhi."
        visible={vis}
      />

      {/* ── Membership Banner ── */}
      <div className={`${styles.membership} reveal d1 ${vis ? 'vis' : ''}`}>
        <div className={styles.membershipInner}>
          <div className={styles.membershipLeft}>
            <span className={styles.membershipBadge}>Membresía DXN</span>
            <h2 className={styles.membershipTitle}>
              Hazte <em>socio</em> y compra a precio de mayorista
            </h2>
            <p className={styles.membershipText}>
              Sin costo de afiliación. Te acompañamos para que aproveches el
              descuento desde tu primer pedido.
            </p>
          </div>
          <div className={styles.membershipRight}>
            <Button
              href={PARTNER_WHATSAPP}
              size="lg"
              icon="→"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.membershipBtn}
            >
              Quiero ser socio
            </Button>
          </div>
        </div>
      </div>

      {PRODUCT_CATEGORIES.map((cat) => {
        const items = PRODUCTS.filter((p) => p.category === cat.key)
        if (items.length === 0) return null

        return (
          <div key={cat.key} className={styles.group}>
            <div className={`${styles.groupHead} vis`}>
              <span className={styles.groupIcon} aria-hidden="true">{cat.icon}</span>
              <h3 className={styles.groupTitle}>{cat.label}</h3>
              <p className={styles.groupDesc}>{cat.desc}</p>
              <span className={styles.groupLine} aria-hidden="true" />
            </div>

            <div className={styles.grid}>
              {items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  delay=""
                  visible={vis}
                />
              ))}
            </div>
          </div>
        )
      })}

    </section>
  )
}
