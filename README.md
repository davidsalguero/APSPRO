# APSPRO â€” mockup inicial

Mockup responsive de `apspro.net`, construido con Next.js y TypeScript. Los productos, mÃ©tricas, certificaciones, proyectos y datos de contacto aÃºn son demostrativos.

## Ejecutar localmente

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Si PowerShell bloquea `npm.ps1`, use `npm.cmd install` y `npm.cmd run dev`.

## ValidaciÃ³n

```bash
npm run lint
npm run typecheck
npm run build
```

## Estructura principal

- `app/page.tsx`: composiciÃ³n de la portada.
- `app/globals.css`: sistema visual y comportamiento responsive.
- `components/site-header.tsx`: navegaciÃ³n responsive.
- `data/catalog.ts`: contenido demostrativo separado de la presentaciÃ³n.

## Estado funcional

- La navegaciÃ³n usa anclas internas.
- El formulario es Ãºnicamente visual y no transmite datos.
- No hay backend, base de datos, CMS ni integraciones externas.
- El proyecto estÃ¡ preparado para despliegue posterior en Vercel, pero no se ha publicado.

