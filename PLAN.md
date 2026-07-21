# Plan del sitio web corporativo industrial

Última actualización: 2026-07-14  
Estado general: Fase 1 — levantamiento de requerimientos en curso

Entrega activa: mockup inicial con información ficticia completado y validado localmente.

## Alcance acordado

Crear desde cero un sitio corporativo industrial, original y responsive, orientado a presentar la empresa, organizar productos y categorías, publicar información técnica y generar solicitudes de cotización y consultas. El acompañamiento incluirá planificación, diseño, desarrollo, publicación, dominio, hosting, SSL, seguridad, SEO y mantenimiento.

Restricciones actuales:

- No comprar ni contratar servicios sin autorización explícita.
- No copiar diseño, textos, imágenes, marca ni código del sitio de referencia.
- No seleccionar definitivamente la tecnología antes de recibir y analizar los requerimientos.
- No guardar contraseñas, tokens, claves privadas ni secretos en el repositorio o en este archivo.
- No iniciar todavía la implementación completa.

## Decisiones tomadas

- El sitio de referencia se usará únicamente como inspiración funcional y de jerarquía comercial.
- La conversión principal será la solicitud de cotización; contacto por correo, teléfono y WhatsApp serán rutas complementarias.
- El catálogo deberá separar los datos de producto de los componentes visuales y admitir crecimiento futuro.
- Se aplicará diseño responsive, accesibilidad básica WCAG, SEO técnico, rendimiento y seguridad desde la arquitectura.
- Se trabajará en entregas pequeñas con aprobación antes de avanzar a la siguiente fase.
- La tecnología concreta del frontend y la necesidad de CMS permanecen pendientes; por ahora no se contempla una base de datos.
- El dominio `apspro.net` fue comprado y se administra directamente en Vercel.
- El nombre de la empresa y marca principal será `APS`; `APSPRO` se conserva únicamente en nombres técnicos existentes como el dominio y el repositorio.
- Vercel administra el DNS, HTTPS y la renovación del dominio `apspro.net`.
- El frontend se desplegará en Vercel.
- La primera versión no tendrá backend propio ni base de datos.
- La tecnología del frontend y el método seguro de procesamiento de formularios todavía deben compararse y aprobarse.
- Para el mockup se adoptó Next.js con TypeScript, compatible con el despliegue futuro previsto en Vercel.
- El mockup ya utiliza la marca `APS` y los logos entregados por el cliente; sus productos, métricas, certificaciones, proyectos, teléfono y correo siguen siendo demostrativos hasta recibir datos reales.
- El formulario del mockup es visual y no transmite información.

## Análisis preliminar del sitio de referencia

Sitio revisado: https://www.phtopindustry.com/

### Estructura observada

- Barra superior con correo, WhatsApp/teléfono y mensaje de alcance internacional.
- Navegación principal: inicio, productos y accesorios, soluciones, proyectos, exposiciones, recursos, empresa y contacto.
- CTA persistente de cotización.
- Inicio: propuesta de valor, métricas, certificaciones, categorías, productos, soluciones por industria, mapa/proyectos, diferenciadores, certificaciones, artículos/recursos, CTA final y pie de página.
- Categorías y productos organizados en tarjetas con imagen, nombre y resumen.
- Fichas con descripción, características, especificaciones tabulares, conexiones, aplicaciones, ventajas, control de calidad, instalación, certificados y CTA comercial.
- Contacto mediante formulario, correo y WhatsApp; el formulario observado solicita nombre, correo, teléfono/WhatsApp, empresa y mensaje y contiene un campo trampa contra bots.
- En móvil se usa menú colapsado, se apilan los contenidos y aparece una barra inferior de contactos rápidos.

### Elementos que conviene adoptar conceptualmente

- Navegación por productos y también por industria/aplicación.
- CTA de cotización visible en momentos de alta intención.
- Fichas técnicas con tablas, normas, documentos y aplicaciones.
- Certificaciones y proyectos como evidencia de confianza.
- Acceso directo a WhatsApp y correo sin sustituir el formulario trazable.
- Contenido técnico/FAQ para SEO y soporte de ventas.
- Pie de página completo con rutas clave, datos comerciales y páginas legales.

### Elementos que conviene mejorar

- Reducir la longitud y repetición del inicio; priorizar jerarquía, escaneo y velocidad.
- Evitar demasiados controles flotantes y CTAs simultáneos, especialmente en móvil.
- Hacer más clara la diferencia entre categoría, producto, solución e industria.
- Añadir búsqueda y filtros solo si el volumen real del catálogo los justifica.
- Diseñar una cotización estructurada con producto, cantidad, país, especificación y consentimiento de privacidad.
- Mejorar la accesibilidad de tablas técnicas, navegación, foco, etiquetas y controles táctiles.
- Mantener consistencia en cifras, mensajes, URLs y nomenclatura.
- Optimizar imágenes y scripts para reducir peso y movimiento de contenido.
- Crear una identidad propia con fotografía, diagramas, iconografía, voz y paleta originales.

## Tareas completadas

- [x] Registrar alcance y restricciones iniciales.
- [x] Inspeccionar la navegación y la página principal de referencia.
- [x] Inspeccionar una ficha de producto y sus especificaciones.
- [x] Inspeccionar el formulario de contacto.
- [x] Comprobar el comportamiento visual en escritorio y en un viewport móvil.
- [x] Identificar patrones útiles y oportunidades de mejora.
- [x] Preparar el cuestionario indispensable de requerimientos.
- [x] Preparar un plan preliminar de entregas.
- [x] Preparar categorías preliminares de costos.
- [x] Crear mockup inicial responsive con contenido ficticio separado de la interfaz.
- [x] Implementar navegación móvil, catálogo de muestra, industrias, proyecto, certificaciones y formulario visual.
- [x] Crear README, `.env.example` y configuración de TypeScript.
- [x] Validar compilación, lint, tipos y auditoría de dependencias sin vulnerabilidades pendientes.
- [x] Revisar el mockup en navegador de escritorio y móvil, sin desbordamiento horizontal ni errores de consola.
- [x] Comprobar que los enlaces internos tienen destino y que existe un único encabezado principal.

## Tareas pendientes

- [ ] Recibir y consolidar respuestas del cliente.
- [ ] Definir alcance de la primera versión y criterios de aceptación.
- [ ] Preparar dos alternativas técnicas comparables: sencilla/económica y profesional/escalable.
- [ ] Confirmar el plan de Vercel apto para uso comercial y sus límites antes del despliegue público.
- [ ] Definir si los formularios usarán un proveedor externo o una función serverless mínima, sin exponer credenciales.
- [ ] Recomendar arquitectura final y obtener aprobación.
- [ ] Preparar inventario de contenido y modelo de datos del catálogo.
- [ ] Proponer sitemap, flujos de contacto/cotización y wireframes.
- [ ] Proponer sistema visual y componentes; obtener aprobación.
- [ ] Inicializar proyecto, Git, README y `.env.example`.
- [ ] Implementar, probar y documentar por incrementos.
- [ ] Preparar infraestructura, despliegue, DNS, correo y seguridad.
- [ ] Ejecutar validación de publicación, accesibilidad, SEO y rendimiento.
- [ ] Entregar documentación de operación y mantenimiento.

## Entregas pequeñas propuestas

1. Descubrimiento: requerimientos, objetivos medibles, inventario y alcance de V1.
2. Arquitectura: dos opciones, costos, riesgos, recomendación y decisión.
3. Información: sitemap, taxonomía, modelo de producto y flujos de conversión.
4. UX: wireframes de páginas y comportamiento responsive.
5. Diseño visual: identidad digital, tipografía, color, componentes y prototipo clave.
6. Base técnica: repositorio, calidad, entorno, datos de ejemplo y despliegue de prueba.
7. Catálogo: categorías, listados, fichas, documentos y SEO de producto.
8. Conversión: contacto, cotización, validación, antispam y correo transaccional.
9. Contenido corporativo: empresa, industrias, proyectos, certificaciones, FAQ y legales.
10. Prepublicación: pruebas, accesibilidad, seguridad, rendimiento, SEO y correcciones.
11. Publicación: dominio, DNS, HTTPS, redirecciones, monitoreo y copias de seguridad.
12. Entrega operativa: manuales, checklists, capacitación y calendario de mantenimiento.

Cada entrega incluirá, cuando ya exista código: compilación, lint, tipos, pruebas, rutas principales, móvil, consola, enlaces, accesibilidad básica y revisión del cambio.

## Riesgos detectados

- Catálogo, idiomas y administración aún no definidos; pueden cambiar la arquitectura y el costo.
- No hay identidad, contenido, fotografías ni documentos técnicos confirmados.
- Las afirmaciones técnicas, certificaciones y casos deberán aportar evidencia verificable.
- Adjuntar archivos aumenta el riesgo de abuso y requiere almacenamiento, validación y límites seguros.
- Un sitio puramente frontend no puede enviar correo de forma segura usando credenciales privadas; la cotización necesitará un servicio de formularios o una función serverless mínima.
- WhatsApp y formularios pueden atraer spam; será necesaria defensa por capas.
- El tratamiento de datos y cookies dependerá de países objetivo y herramientas elegidas.
- Correo corporativo y entregabilidad requieren configuración correcta de SPF, DKIM y DMARC.
- Los precios de proveedores, promociones, impuestos y renovaciones pueden variar por país y fecha.
- Un panel administrativo o blog incrementa superficie de ataque y mantenimiento.

## Información y configuraciones que deberá proporcionar el cliente

Pendientes de la Fase 1:

- Datos legales y comerciales de la empresa.
- Mercados, idiomas, catálogo, normas, certificaciones y contenido disponible.
- Identidad visual, logotipo y materiales originales autorizados.
- Datos públicos de contacto, redes y número de WhatsApp.
- Preferencias de dominio y cuentas de correo requeridas.
- Necesidades de administración, blog, usuarios, pagos y mantenimiento.
- Presupuesto, tráfico previsto, fecha objetivo y responsable de aprobaciones.

Más adelante, ingresados directamente en los proveedores y nunca en el código o en `PLAN.md`:

- Acceso del registrador de dominio y DNS.
- Acceso a Vercel para administrar el repositorio conectado, el dominio, DNS y las variables de entorno.
- Acceso del proveedor de hosting y del repositorio Git.
- Verificación del dominio para correo.
- Claves/API de formulario, correo transaccional, antispam, analítica o CMS.
- Datos fiscales y método de pago para servicios autorizados.

## Registro preliminar de costos posibles

Los importes definitivos se calcularán tras decidir alcance, país de facturación, moneda y tecnología. Categorías por validar:

- Obligatorios: dominio y, normalmente, al menos una cuenta de correo corporativo.
- Recomendados: hosting comercial si el plan gratuito no admite el uso empresarial previsto, correo transaccional/formularios, monitoreo y mantenimiento.
- Opcionales: CMS administrado, WordPress/hosting gestionado, almacenamiento de adjuntos, banco de imágenes, traducción profesional, analítica avanzada, CDN/WAF de pago, copias de seguridad externas y soporte mensual.

## Puerta de aprobación actual

Esperar las respuestas de requerimientos. No seleccionar tecnología, comprar servicios ni comenzar desarrollo hasta consolidarlas y presentar las dos alternativas de arquitectura.

## Registro de publicación — 2026-07-14

### Completado

- [x] Crear el repositorio público `davidsalguero/APSPRO` en GitHub.
- [x] Publicar el mockup completo en la rama `main` sin secretos, cachés ni dependencias instaladas.
- [x] Crear el proyecto `apspro` en el equipo `DS desarrollos` de Vercel mediante MCP.
- [x] Ejecutar el primer despliegue de producción con Next.js 16.2.6.
- [x] Verificar compilación, TypeScript y generación estática en los registros de Vercel.
- [x] Verificar respuesta HTTPS `200 OK` y ausencia de errores de ejecución.

### Referencias operativas

- Repositorio: `https://github.com/davidsalguero/APSPRO`
- URL principal: `https://apspro.net`
- Proyecto Vercel: `prj_dqzJFKlEBPh6Y6yPu7QLSJzLwdfB`
- Deployment inicial: `dpl_3wvfNyc5S6XxiqNzvtRMdQbaf1yS`

### Pendiente

- [x] Conectar formalmente el proyecto de Vercel con el repositorio GitHub para habilitar despliegues automáticos por cada `push` a `main`.
- [x] Comprar y vincular `apspro.net` desde Vercel, con DNS y HTTPS administrados por la plataforma.
- [x] Sustituir la marca visible `APSPRO` por `APS` e integrar los logos oficiales preparados para web.
- [ ] Sustituir datos, productos, certificaciones y contactos demostrativos por información verificada.
- [ ] Implementar el formulario funcional con procesamiento seguro; el botón actual no transmite datos.

### Actualización de identidad — 2026-07-21

- [x] Confirmar que el nombre comercial es `APS` y que `apspro.net` es únicamente el dominio.
- [x] Preparar variantes transparentes y optimizadas de los logos oficiales sin alterar su geometría.
- [x] Integrar el logo en encabezado, pie, favicon y metadatos SEO.
- [x] Incorporar una franja decorativa de cuatro tuberías bajo la navegación, en azul, blanco, rojo y amarillo.
- [x] Mostrar la marca completa `APS` en un favicon cuadrado con fondo blanco, sin deformación y con área de seguridad.
- [x] Validar lint, TypeScript, build, HTML renderizado y carga de activos.

### Enfoque comercial PEX — 2026-07-21

- [x] Definir a APS como distribuidor de tecnologías PEX con operación en Guatemala.
- [x] Reorientar el contenido hacia tubería, conexiones y colectores de polietileno reticulado.
- [x] Incorporar información técnica general basada en documentación del Plastics Pipe Institute.
- [x] Generar e integrar dos imágenes originales de referencia sobre sistemas e instalación PEX.
- [x] Corregir la visualización parcial de las fotografías en Vercel, sirviéndolas directamente para evitar la transformación defectuosa del optimizador.
- [x] Actualizar los metadatos SEO para búsquedas relacionadas con sistemas PEX en Guatemala.
- [ ] Confirmar las marcas representadas y obtener autorización para publicar sus nombres y logotipos.
- [ ] Confirmar el portafolio, métodos de unión, medidas, clasificaciones, garantías y certificaciones de cada fabricante.
- [ ] Validar las referencias normativas y requisitos aplicables en Guatemala antes de convertir el contenido técnico en una especificación contractual.

### Ampliación técnica PEX y HDPE — 2026-07-21

- [x] Incorporar una explicación general de PEX, sus procesos PEX-a, PEX-b y PEX-c y sus propiedades habituales.
- [x] Agregar una comparación equilibrada entre PEX y PVC convencional, distinguiendo expresamente PVC de CPVC.
- [x] Incorporar HDPE al portafolio y presentar aplicaciones en agua potable, aguas residuales, minería, industria, agricultura e instalación sin zanja.
- [x] Explicar la relación dimensional DR/SDR y mostrar referencias generales para DR 9, 11, 13.5 y 17.
- [x] Agregar un ejemplo controlado de espesor con OD IPS de 4.500 pulgadas: PVC ASTM D2241 SDR 17 de 250 psi frente a HDPE DR 11 y DR 9.
- [x] Incorporar una comparación de selección entre HDPE y hierro galvanizado, incluyendo ventajas y limitaciones de ambos materiales.
- [ ] Confirmar que la abreviatura `HG` utilizada por el cliente significa hierro galvanizado.
- [ ] Sustituir las referencias generales por fichas técnicas de las marcas y productos que APS distribuirá efectivamente.
- [ ] Confirmar diámetros, resinas, clases de presión, factores de diseño, temperatura y normas para las tablas comerciales definitivas.

Riesgo técnico: una clase de presión no permite comparar por sí sola dos materiales. El ejemplo de espesor solo es válido para el mismo diámetro exterior indicado y no sustituye el diseño hidráulico, estructural ni el submittal del fabricante.
