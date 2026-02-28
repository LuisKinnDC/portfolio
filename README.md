# 🧊 Portafolio Personal — Luis Kinn DC

Portafolio profesional interactivo con escena 3D, animaciones fluidas, glassmorphism y tema oscuro con paleta ice-blue/cyan. Construido con **React 19**, **Vite 7**, **Tailwind CSS v4**, **Three.js** y **Framer Motion**.

> **Demo en vivo:** _Próximamente_

---

## 📸 Vista previa

| Hero con escena 3D | Sección de Skills filtrable |
|---|---|
| ![hero preview](https://via.placeholder.com/600x340/0f172a/38bdf8?text=Hero+3D) | ![skills preview](https://via.placeholder.com/600x340/0f172a/38bdf8?text=Skills) |

---

## ✨ Características principales

- **Escena 3D interactiva** — Esfera distorsionada con parallax de mouse, campo de 200 partículas y formas flotantes (desactivada en móvil para rendimiento).
- **Smooth scrolling** — Lenis (`@studio-freight/lenis`) con easing personalizado y fallback nativo.
- **Animaciones ricas** — Framer Motion en todo el sitio: reveals escalonados, fade-ins direccionales, `AnimatePresence` para contenido filtrable, micro-interacciones en botones y tarjetas.
- **Tema oscuro con glassmorphism** — Paleta personalizada ice-blue/cyan/teal/purple, paneles glass con `backdrop-blur`, texto con gradiente y sombras glow.
- **Diseño responsive** — Mobile-first, menú hamburguesa con panel deslizante animado, escena 3D reemplazada por gradiente CSS en móvil, grids flexibles.
- **Contenido filtrable** — Skills por categoría y Proyectos por tipo, con transiciones animadas.
- **Formulario de contacto** — Validación en tiempo real (nombre, email, mensaje) con estado de éxito simulado.
- **Optimización de rendimiento** — Lazy loading de imágenes, scroll listeners pasivos, importación dinámica de Lenis, fallback móvil 3D, DPR limitado en Canvas.
- **SEO ready** — Meta tags, HTML semántico, `lang="es"`, preconnect de fuentes.

---

## 🛠️ Stack tecnológico

### Core

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.2 | Biblioteca UI principal |
| [Vite](https://vite.dev/) | 7.3 | Bundler y dev server con HMR |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Framework de utilidades CSS con `@theme` personalizado |

### 3D y visuales

| Tecnología | Versión | Uso |
|---|---|---|
| [Three.js](https://threejs.org/) | 0.172 | Motor de renderizado 3D (WebGL) |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | 9.0 | Renderer declarativo de Three.js para React |
| [React Three Drei](https://github.com/pmndrs/drei) | 10.0 | Helpers: `Float`, `MeshDistortMaterial`, `Sphere`, etc. |

### Animaciones y scroll

| Tecnología | Versión | Uso |
|---|---|---|
| [Framer Motion](https://www.framer.com/motion/) | 12.0 | Animaciones, transiciones, `AnimatePresence`, variantes |
| [Lenis](https://lenis.darkroom.engineering/) | 1.0 | Smooth scrolling premium con easing personalizado |
| [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) | 9.15 | Detección de visibilidad para animaciones on-scroll |

### UI y utilidades

| Tecnología | Versión | Uso |
|---|---|---|
| [React Icons](https://react-icons.github.io/react-icons/) | 5.4 | Iconos (Font Awesome, Heroicons, Simple Icons) |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Composición condicional de clases CSS |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.0 | Merge inteligente de clases Tailwind sin conflictos |

### Dev tools

| Tecnología | Versión | Uso |
|---|---|---|
| [ESLint](https://eslint.org/) | 9.39 | Linting de código JavaScript/JSX |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | 7.0 | Reglas de hooks de React |
| [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) | 0.4 | Validación de Fast Refresh |
| [PostCSS](https://postcss.org/) | 8.4 | Procesamiento de CSS |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4 | Prefijos vendor automáticos |

### Fuentes (Google Fonts)

- **Inter** — Tipografía principal sans-serif
- **JetBrains Mono** — Tipografía monospace para el terminal decorativo

---

## 📁 Estructura del proyecto

```
├── index.html                    # HTML shell con SEO, preconnect de fuentes
├── vite.config.js                # Configuración Vite + plugins React y Tailwind
├── eslint.config.js              # ESLint flat config
├── package.json
│
├── public/                       # Archivos estáticos (CV, imágenes)
│
└── src/
    ├── main.jsx                  # Entry point — importa Lenis dinámicamente
    ├── App.jsx                   # Componente raíz — ensambla layout y secciones
    │
    ├── assets/                   # Recursos estáticos importados
    │
    ├── components/
    │   ├── 3d/
    │   │   ├── BackgroundParticles.jsx   # Campo de 200 partículas animadas
    │   │   ├── FloatingShapes.jsx        # 5 icosaedros flotantes con distorsión
    │   │   ├── HeroScene.jsx             # Canvas 3D completo (fallback móvil)
    │   │   └── TechOrb.jsx              # Esfera interactiva con parallax de mouse
    │   │
    │   ├── animations/
    │   │   ├── FadeIn.jsx               # Wrapper fade + translate (5 direcciones)
    │   │   ├── ScrollReveal.jsx         # Reveal con scale-up al hacer scroll
    │   │   └── StaggerContainer.jsx     # Contenedor + items con reveal secuencial
    │   │
    │   ├── layout/
    │   │   ├── Header.jsx               # Navbar fijo con glassmorphism + menú móvil
    │   │   └── Footer.jsx               # Footer con redes sociales y badge
    │   │
    │   ├── sections/
    │   │   ├── Hero.jsx                 # Hero full-viewport con escena 3D y CTAs
    │   │   ├── About.jsx                # Sobre mí + terminal mockup + stats
    │   │   ├── Skills.jsx               # Skills filtrables por categoría (5 tabs)
    │   │   ├── Methodology.jsx          # Timeline de 4 pasos con cards alternadas
    │   │   ├── Projects.jsx             # Galería filtrable de proyectos
    │   │   └── Contact.jsx              # Formulario con validación + info directa
    │   │
    │   └── ui/
    │       ├── Badge.jsx                # Pill con 5 variantes de color + icono
    │       ├── Button.jsx               # Botón/enlace con 4 variantes y 3 tamaños
    │       ├── Card.jsx                 # Tarjeta glassmorphism con hover lift
    │       └── SectionContainer.jsx     # Wrapper de sección con título animado
    │
    ├── data/
    │   ├── personal.js                  # Datos personales, bio, stats
    │   ├── projects.js                  # 5 proyectos con metadata completa
    │   └── skills.js                    # 25 skills en 5 categorías
    │
    ├── hooks/
    │   ├── useOnScreen.js               # Detección de visibilidad (IntersectionObserver)
    │   └── useScrollProgress.js         # Progreso de scroll (0-1) para barra del header
    │
    └── styles/
        └── globals.css                  # Tailwind v4 @theme, glassmorphism, scrollbar custom
```

---

## 🎨 Sistema de diseño

### Paleta de colores

| Token | Color | Uso |
|---|---|---|
| `ice-50` a `ice-950` | Escala azul hielo | Color primario del sitio |
| `accent-cyan` | `#22d3ee` | Acentos, bordes hover, glow |
| `accent-teal` | `#2dd4bf` | Acentos secundarios |
| `accent-purple` | `#a78bfa` | Badges IA, decoraciones |
| `slate-950` | Fondo base | Background principal |

### Clases utilitarias personalizadas

- `.glass` / `.glass-strong` — Paneles glassmorphism con `backdrop-blur`
- `.gradient-text` — Texto con gradiente cyan → teal
- `.gradient-border` — Borde gradiente usando máscara CSS
- `.text-glow` — Efecto glow en texto
- `.shadow-glow` — Sombra glow cyan

### Animaciones CSS custom

- `float` — Movimiento vertical flotante
- `glow` — Pulso de sombra glow
- `gradient` — Rotación de gradiente de fondo

---

## 🚀 Instalación y uso

### Requisitos previos

- **Node.js** ≥ 18
- **npm** o **pnpm**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/LuisKinnDC/PortafolioPersonal.git
cd PortafolioPersonal

# Instalar dependencias
npm install
```

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera la build de producción en `dist/` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |

---

## 📝 Personalización

### Datos personales

Edita los archivos en `src/data/` para personalizar el contenido:

- **`personal.js`** — Nombre, título, bio, redes sociales, stats
- **`projects.js`** — Lista de proyectos con descripción, stack técnico, links
- **`skills.js`** — Lista de skills con categoría, icono y nivel

### Tema visual

Modifica `src/styles/globals.css` para ajustar la paleta de colores, fuentes y animaciones dentro del bloque `@theme`.

---

## 📄 Licencia

Este proyecto es de uso personal. Si deseas usarlo como base, por favor da crédito al autor.

---

<p align="center">
  Hecho con ❄️ por <strong>Luis Kinn DC</strong> — React + Tailwind CSS + IA
</p>
