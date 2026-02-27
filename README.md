# ENGLISH

## Credits

Originally created by [Luis Roca](https://github.com/luisrocvlz). If you use it, a small credit is appreciated but not required.

## Portfolio V2

A professional, component-based personal portfolio. Built with **Vite**, **Tailwind CSS v3**, and **Vanilla JavaScript (ES6 modules)** — no frameworks, just clean and maintainable code.

### Features

- **Component-based architecture** — each section is an independent JS module
- **Responsive** — adapts to any screen size
- **Dark / Light mode** — persisted via `localStorage`
- **Bilingual (ES / EN)** — full i18n system via `data-i18n` attributes
- **Glassmorphism UI** — custom glass cards, animated blobs, custom cursor
- **Infinite tech scroll** — SVG logos from [svgl.app](https://svgl.app)
- **Vite build** — fast HMR in development, optimized bundle for production

### Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Bundler & dev server |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [Phosphor Icons](https://phosphoricons.com/) | UI icons |
| [svgl.app](https://svgl.app/) | SVG brand logos |
| [Formspree](https://formspree.io/) | Contact form |

---

### Project Structure

```
src/
├── components/     # UI components (Navbar, Hero, Projects, etc.)
├── data/           # Decoupled data (projects.js, translations.js, techStack.js)
├── utils/          # Reusable utilities (theme.js, i18n.js, smoothScroll.js)
└── styles/         # CSS (main.css — Tailwind + variables + components)
public/
├── img/            # Project images & portraits
└── docs/           # CV PDFs (ES & EN)
```

### Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/luisrocvlz/Portafolio.git
cd Portafolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev        # http://localhost:5173

# 4. Build for production
npm run build
```

---

### Customization

#### Personal Info & Text
- Edit text in `src/components/` (Hero, About, Contact, etc.)
- Edit all translations in `src/data/translations.js`

#### Projects
- Edit `src/data/projects.js` — add/remove/update project objects

#### Tech Stack Carousel
- Edit `src/data/techStack.js` — add SVG URLs from [svgl.app](https://svgl.app) or inline SVG strings

#### Images & CV
- Portrait: replace `public/img/portrait_light.webp` and `public/img/portrait_dark.webp`
- Project thumbnails: replace images in `public/img/`
- CV: replace `public/docs/cv_luis_roca_es.pdf` / `public/docs/cv_luis_roca_en.pdf`  
  Then update the filenames in `src/utils/i18n.js`

#### Theme & Colors
- CSS variables (colors, glass effects): `src/styles/main.css` — `:root` and `html.dark`
- Tailwind config (animations, fonts): `tailwind.config.js`

#### Contact Form
1. Go to [Formspree](https://formspree.io/) and create a form
2. Copy your endpoint URL
3. Update the `action` attribute in `src/components/Contact.js`

### License

MIT — free to use, modify, and distribute.

---
---

# ESPAÑOL

## Créditos

Creado originalmente por [Luis Roca](https://github.com/luisrocvlz). Si lo usas, un pequeño crédito es apreciado pero no obligatorio.

## Portafolio V2

Un portafolio personal profesional y basado en componentes. Construido con **Vite**, **Tailwind CSS v3** y **Vanilla JavaScript (módulos ES6)** — sin frameworks, solo código limpio y mantenible.

### Características

- **Arquitectura basada en componentes** — cada sección es un módulo JS independiente
- **Responsivo** — se adapta a cualquier tamaño de pantalla
- **Modo oscuro / claro** — persistido con `localStorage`
- **Bilingüe (ES / EN)** — sistema i18n completo con atributos `data-i18n`
- **UI Glassmorphism** — glass cards, blobs animados, cursor personalizado
- **Carrusel de tecnologías** — logos SVG desde [svgl.app](https://svgl.app)
- **Build con Vite** — HMR rápido en desarrollo, bundle optimizado para producción

### Stack Tecnológico

| Herramienta | Propósito |
|---|---|
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [Tailwind CSS v3](https://tailwindcss.com/) | Estilos utilitarios |
| [Phosphor Icons](https://phosphoricons.com/) | Iconos de UI |
| [svgl.app](https://svgl.app/) | Logos SVG de marcas |
| [Formspree](https://formspree.io/) | Formulario de contacto |

---

### Estructura del Proyecto

```
src/
├── components/     # Componentes UI (Navbar, Hero, Projects, etc.)
├── data/           # Datos desacoplados (projects.js, translations.js, techStack.js)
├── utils/          # Utilidades reutilizables (theme.js, i18n.js, smoothScroll.js)
└── styles/         # CSS (main.css — Tailwind + variables + componentes)
public/
├── img/            # Imágenes de proyectos y retratos
└── docs/           # CVs en PDF (ES & EN)
```

### Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/luisrocvlz/Portafolio.git
cd Portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev        # http://localhost:5173

# 4. Compilar para producción
npm run build
```

---

### Personalización

#### Información Personal y Textos
- Edita el texto en `src/components/` (Hero, About, Contact, etc.)
- Edita todas las traducciones en `src/data/translations.js`

#### Proyectos
- Edita `src/data/projects.js` — agrega, elimina o actualiza objetos de proyectos

#### Carrusel de Tecnologías
- Edita `src/data/techStack.js` — agrega URLs de SVG desde [svgl.app](https://svgl.app) o strings SVG inline

#### Imágenes y CV
- Retrato: reemplaza `public/img/portrait_light.webp` y `public/img/portrait_dark.webp`
- Miniaturas: reemplaza las imágenes en `public/img/`
- CV: reemplaza `public/docs/cv_luis_roca_es.pdf` / `public/docs/cv_luis_roca_en.pdf`  
  Luego actualiza los nombres en `src/utils/i18n.js`

#### Tema y Colores
- Variables CSS (colores, efectos glass): `src/styles/main.css` — `:root` y `html.dark`
- Config de Tailwind (animaciones, fuentes): `tailwind.config.js`

#### Formulario de Contacto
1. Ve a [Formspree](https://formspree.io/) y crea un formulario
2. Copia tu URL de endpoint
3. Actualiza el atributo `action` en `src/components/Contact.js`

### Licencia

MIT — libre para usar, modificar y distribuir.
