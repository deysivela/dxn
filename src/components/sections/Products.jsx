import { useReveal } from '../../hooks/useReveal'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/products'
import ProductCard from '../ui/ProductCard'
import SectionHeader from '../ui/SectionHeader'
import styles from './Products.module.css'

export default function Products() {
  const [ref, vis] = useReveal(0.08)

  return (
    <section className={styles.section} id="productos">
      <div className={styles.bgLines} aria-hidden="true" />

      <div ref={ref}>
        <SectionHeader
          eyebrow="Catálogo DXN"
          title={<>Sabores que <em>transforman</em></>}
          visible={vis}
        />

        {PRODUCT_CATEGORIES.map((cat) => {
          const items = PRODUCTS.filter((p) => p.category === cat.key)
          if (items.length === 0) return null

          return (
            <div key={cat.key} className={styles.group}>
              <div className={`${styles.groupHead} reveal ${vis ? 'vis' : ''}`}>
                <span className={styles.groupIcon} aria-hidden="true">{cat.icon}</span>
                <h3 className={styles.groupTitle}>{cat.label}</h3>
                <p className={styles.groupDesc}>{cat.desc}</p>
                <span className={styles.groupLine} aria-hidden="true" />
              </div>

              <div className={styles.grid}>
                {items.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    delay={`d${Math.min(i + 1, 6)}`}
                    visible={vis}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
