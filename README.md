# DXN Bolivia — Landing Page

Landing page premium para la venta de productos DXN construida con **React + Vite + CSS Modules**.

##  Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

##  Estructura del proyecto

```
dxn-landing/
├── public/
│   └── images/
│       └── favicon.svg
│
├── src/
│   ├── assets/                  # Logos, íconos estáticos
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx       # Botón reutilizable (primary / ghost)
│   │   │   ├── Button.module.css
│   │   │   ├── Eyebrow.jsx      # Etiqueta pill sobre títulos
│   │   │   ├── Eyebrow.module.css
│   │   │   ├── ProductCard.jsx  # Card de producto double-bezel
│   │   │   ├── ProductCard.module.css
│   │   │   ├── BenefitCard.jsx  # Card de beneficio oscuro
│   │   │   ├── BenefitCard.module.css
│   │   │   ├── SectionHeader.jsx # Encabezado de sección reutilizable
│   │   │   └── SectionHeader.module.css
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Navbar flotante pill + menú móvil
│   │   │   ├── Navbar.module.css
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx         # Hero con copas en Z-axis cascade
│   │       ├── Hero.module.css
│   │       ├── Products.jsx     # Grid 3×2 de productos
│   │       ├── Products.module.css
│   │       ├── Benefits.jsx     # Grid 3×2 de beneficios
│   │       ├── Benefits.module.css
│   │       ├── Quality.jsx      # Stats panel + feature list
│   │       ├── Quality.module.css
│   │       ├── CTA.jsx          # Call to action final
│   │       └── CTA.module.css
│   │
│   ├── data/
│   │   ├── products.js          # Datos de productos y copas hero
│   │   └── benefits.js          # Beneficios, features de calidad y stats
│   │
│   ├── hooks/
│   │   └── useReveal.js         # IntersectionObserver scroll reveal hook
│   │
│   ├── pages/
│   │   └── HomePage.jsx         # Ensambla todas las secciones
│   │
│   ├── styles/
│   │   ├── global.css           # Reset, design tokens CSS, fuentes
│   │   └── animations.css       # Keyframes y clases .reveal / .vis
│   │
│   ├── App.jsx                  # Root: Navbar + HomePage
│   └── main.jsx                 # Entry point React
│
├── index.html
├── vite.config.js
└── package.json
```

##  Design Tokens

Todos los colores, fuentes y espaciados están definidos como variables CSS en `src/styles/global.css`:

| Token             | Valor      | Uso                     |
|-------------------|------------|-------------------------|
| `--black`         | `#080503`  | Fondo base              |
| `--espresso`      | `#120B06`  | Fondos de secciones     |
| `--bark`          | `#2C1A10`  | Cards de productos      |
| `--gold`          | `#C9973A`  | Acento dorado principal |
| `--champagne`     | `#E2BC72`  | Gradiente dorado claro  |
| `--cream`         | `#FDF7EE`  | Texto principal         |
| `--font-display`  | Libre Baskerville | Títulos             |
| `--font-condensed`| Barlow Condensed  | Labels, botones     |
| `--font-body`     | Barlow            | Texto corrido       |

##  Agregar productos

Edita `src/data/products.js` y añade un objeto al array `PRODUCTS`:

```js
{
  id: 7,
  name: "Nuevo Producto",
  tag: "Categoría",
  desc: "Descripción corta del producto.",
  price: "Bs. 25",
  img: "URL_de_imagen",
  imgFallback: "URL_fallback",
  accent: "#C9973A",
  badge: "Etiqueta",
  category: "caliente",
}
```

##  Tecnologías

- **React 18** + **Vite 5**
- **CSS Modules** (estilos encapsulados por componente)
- **Libre Baskerville** + **Barlow Condensed** (Google Fonts)
- `IntersectionObserver` para scroll reveal (sin librerías externas)
