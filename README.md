# Color Express Salón

Landing de Color Express Salón By Melinaky Contreras. Presenta servicios, una galería de trabajos y enlaces para cotizar o agendar por WhatsApp.

Construida con React, TypeScript, Vite, React Compiler, Tailwind CSS y componentes de shadcn/Base UI. La navegación usa anclas dentro de una sola página.

## Desarrollo

Usa Node 22.12 o superior.

```sh
npm ci
npm run dev
```

## Comprobaciones

```sh
npm run lint
npm run build
npm run preview
```

El build comprueba TypeScript y genera `dist/`. Preview permite revisar ese resultado antes de publicarlo.

Si el comando `npm` de tu equipo no funciona, con las dependencias ya instaladas puedes ejecutar:

```sh
node node_modules/eslint/bin/eslint.js .
node node_modules/typescript/bin/tsc -b
node node_modules/vite/bin/vite.js build
```

## Organización

| Ubicación | Contenido |
| --- | --- |
| `src/App.tsx` | Orden de las secciones de la página. |
| `src/components/layout/` | Encabezado, menú y pie de página. |
| `src/components/sections/` | Portada, servicios, galería y contacto. |
| `src/components/shared/` | Logo y enlaces reutilizables de WhatsApp. |
| `src/components/ui/` | Botón de interfaz y sus variantes visuales. |
| `src/data/salon.ts` | Datos del salón, servicios, fotos y enlaces de WhatsApp. |
| `src/index.css` | Importaciones, tema de Tailwind/shadcn y colores de marca. |
| `src/styles/landing.css` | Estilos de la landing y ajustes para móvil. |
| `public/branding/` | Logos e imagen para compartir la web. |
| `public/images/` | Fotografías de trabajos. |
| `index.html` | Título, descripción, favicon y metadatos para redes sociales. |

## Servicios

Los servicios se mantienen en `src/data/salon.ts`. Cada servicio tiene una `category`: `color`, `styling`, `care` o `cuts`. Se agrupan en el acordeón de `ServicesAccordion.tsx`, con Color abierto inicialmente y una sola categoría abierta a la vez. Desde 768 px, los servicios de la categoría abierta se distribuyen en dos columnas con su descripción; en móvil usan una sola columna de filas compactas.

## Agregar o cambiar fotografías

1. Coloca la fotografía en `public/images/`, usando un nombre en minúsculas y sin espacios.
2. Actualiza la entrada correspondiente de `gallery` en `src/data/salon.ts`:

```ts
{ label: "Maquillaje", src: "/images/maquillaje.jpeg", alt: "Descripción concreta de lo que muestra la fotografía." }
```

La ruta pública comienza con `/images/`, sin `public`. Usa la extensión y las mayúsculas exactas del archivo: el despliegue distingue mayúsculas. Una entrada con `src: ""` muestra “Próximamente”. Las fotos se muestran en formato vertical 3:4 con recorte centrado. Procura comprimirlas antes de subirlas.

## Logos y redes sociales

- `logo.png`: símbolo del encabezado y favicon.
- `logo-text.png`: logo completo de la portada y el pie.
- `compartir-web.png`: vista previa al compartir el enlace.

Si renombras estos archivos, actualiza también sus referencias en los componentes y en `index.html`. Al cambiar de dominio, actualiza la URL canónica, `og:url` y las URLs absolutas de las imágenes para compartir.

## Publicación en Vercel

El repositorio se despliega como un proyecto Vite: comando `npm run build` y directorio de salida `dist`. Los cambios locales llegan al sitio al hacer push a la rama conectada en Vercel.

Antes de publicar, revisa el menú móvil, las anclas, las imágenes y que cada botón de cotización incluya el servicio correcto. La entrega final en WhatsApp y Facebook debe comprobarse desde un teléfono con esas aplicaciones.
