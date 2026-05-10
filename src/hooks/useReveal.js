import { useState, useEffect, useRef } from 'react'

/**
 * useReveal — IntersectionObserver-based scroll reveal hook.
 * Returns [ref, isVisible]. Attach ref to the element you want to observe.
 * Once visible, stays visible (no re-hide on scroll out).
 *
 * @param {number} threshold  - 0–1, fraction of element visible to trigger (default 0.12)
 * @param {string} rootMargin - IntersectionObserver rootMargin (default '0px')
 */
export function useReveal(threshold = 0.12, rootMargin = '0px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // fire once only
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
