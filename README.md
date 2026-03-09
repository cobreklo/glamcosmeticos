# GlamByName — Portafolio de Maquillaje Profesional

Portafolio digital de maquilladora profesional, construido con React, TypeScript y Vite.

## Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** como bundler y dev server
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes de UI
- **React Router** para navegación

## Estructura del Proyecto

```
src/
├── components/   # Componentes reutilizables
├── pages/        # Páginas principales
├── hooks/        # Custom hooks
├── lib/          # Utilidades y helpers
└── types/        # Tipos TypeScript
public/
├── favicon.ico   # Favicon del sitio
└── og-image.png  # Imagen Open Graph
```

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:8080` |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Linting con ESLint |
| `npm run test` | Ejecutar tests |
