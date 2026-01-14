# ☕ Coffee Shop - Premium Bilingual E-commerce

A modern, high-performance coffee shop web application built with **Vue 3**, **Vite**, and **Tailwind CSS v4**. This project features full bilingual support (English/Arabic), RTL layout, and a premium design aesthetic inspired by high-end coffee brands.


## 🚀 Live Demo
[View Live Site on Netlify](https://storied-jalebi-114f6f.netlify.app/)

## 🛠️ Tech Stack

- **Frontend Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using CSS Variables)
- **State Management**: [Pinia](https://pinia.vuejs.org/) (with Persistence)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **Internationalization**: [Vue I18n 10](https://vue-i18n.intlify.dev/)
- **Animations**: [GSAP](https://gsap.com/) & [Swiper](https://swiperjs.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: Netlify

## ✨ Features

- **🌍 Full Bilingual Support**: Seamlessly toggle between English (LTR) and Arabic (RTL).
- **🔗 URL-Synced Language**: Language state is persisted in query parameters (`?lang=ar`) and localStorage.
- **🛍️ Product Experience**:
  - Intuitive product categories and filtering.
  - Premium Product Details page with layered image effects.
  - Fully functional Shopping Cart.
- **🎨 Premium UI/UX**:
  - Glassmorphic elements and modern typography.
  - Responsive Hero Carousel with GSAP animations.
  - Infinite scrolling marquee section.
- **⚡ Performance Optimized**:
  - Tailwind v4 for lightning-fast styling.
  - SPA optimized routing with Netlify redirection rules.
- **🐳 Docker Ready**: Dockerfile and Docker Compose configurations included for dev/prod environments.

## 📦 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (Recommended) or Node.js

### Installation
```bash
# Install dependencies
bun install
```

### Development
```bash
# Start dev server
bun run dev
```

### Build & Preview
```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

### Docker
```bash
# Build and run with Docker Compose
bun run docker:compose:up
```

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run lint` | Run type checking |
| `bun run format` | Format code with Prettier |
| `bun run clean:dist` | Delete build directory |
| `bun run docker:rebuild` | Full rebuild and restart of Docker container |

## 👷 Author
**Adham**