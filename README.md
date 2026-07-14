# APSPRO — mockup inicial

Mockup responsive de `apspro.net`, construido con Next.js y TypeScript. Los productos, métricas, certificaciones, proyectos y datos de contacto aún son demostrativos.

## Ejecutar localmente

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Si PowerShell bloquea `npm.ps1`, use `npm.cmd install` y `npm.cmd run dev`.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

## Estructura principal

- `app/page.tsx`: composición de la portada.
- `app/globals.css`: sistema visual y comportamiento responsive.
- `components/site-header.tsx`: navegación responsive.
- `data/catalog.ts`: contenido demostrativo separado de la presentación.

## Estado funcional

- La navegación usa anclas internas.
- El formulario es únicamente visual y no transmite datos.
- No hay backend, base de datos, CMS ni integraciones externas.
- El mockup está publicado en Vercel: https://apspro.vercel.app
- GitHub está conectado a Vercel para validar despliegues automáticos desde `main`.

## Verificación de despliegue

Prueba de integración GitHub → Vercel iniciada el 2026-07-14.
