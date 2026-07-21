export type ProductCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
  products: string[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  products: string[];
  location: string;
  year: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "plomeria",
    name: "Plomería",
    eyebrow: "Agua fría y caliente",
    description: "Sistemas flexibles para instalaciones sanitarias eficientes, ordenadas y durables.",
    image: "/images/pex-manifold.jpg",
    alt: "Colector de distribución con tuberías PEX rojas y azules",
    products: ["Tuberías PEX-A", "Accesorios PPSU"],
  },
  {
    slug: "contra-incendios",
    name: "Sistemas contra incendios",
    eyebrow: "Redes críticas",
    description: "Soluciones HDPE certificadas y métodos de unión para redes hidráulicas especializadas.",
    image: "/images/hdpe-fire-protection.jpg",
    alt: "Sistema de tubería HDPE con válvulas rojas para protección contra incendios",
    products: ["Tuberías HDPE certificadas", "Accesorios HDPE electrofusionados", "Accesorios HDPE socket fusion"],
  },
  {
    slug: "gas",
    name: "Gas",
    eyebrow: "Distribución segura",
    description: "Sistemas multicapa y conexiones especializadas para instalaciones de gas técnicamente especificadas.",
    image: "/images/pex-gas-installation.jpg",
    alt: "Instalación para gas con tuberías multicapa PEX-AL-PEX amarillas, válvulas y colector",
    products: ["Tuberías multicapa PEX-AL-PEX", "Accesorios de prensado", "Accesorios a compresión"],
  },
  {
    slug: "aire-acondicionado",
    name: "Aire acondicionado",
    eyebrow: "Climatización",
    description: "Conducción multicapa para soluciones de climatización con instalación limpia y controlada.",
    image: "/images/pex-hvac-installation.jpg",
    alt: "Sistema de climatización hidrónica con tuberías multicapa PEX-AL-PEX azules y blancas",
    products: ["Tuberías multicapa PEX-AL-PEX", "Accesorios a compresión"],
  },
  {
    slug: "herramientas",
    name: "Herramientas y equipos",
    eyebrow: "Instalación profesional",
    description: "Equipos para ejecutar, verificar y documentar instalaciones con métodos compatibles.",
    image: "/images/installation-tools-workshop.jpg",
    alt: "Técnicos utilizando herramientas de expansión, electrofusión, corte y perforación para sistemas PEX y HDPE",
    products: ["Herramientas de expansión", "Fusión y electrofusión", "Herramientas de corte", "Herramientas para instalación", "Perforadoras y brocas"],
  },
];

export const benefits = [
  { title: "Tecnología comprobada", text: "Distribuimos soluciones de marcas con presencia mundial y documentación técnica." },
  { title: "Mejor costo instalado", text: "Buscamos reducir tiempos, uniones y reprocesos, no solamente el precio por metro." },
  { title: "Soporte para el proyecto", text: "Orientación para seleccionar sistemas, accesorios y herramientas compatibles." },
  { title: "Confiabilidad futura", text: "Materiales resistentes a corrosión y métodos de unión pensados para larga vida útil." },
];

export const services = [
  {
    name: "Renta de equipo",
    number: "01",
    text: "Alquiler de herramientas y equipos especializados para expansión, fusión, electrofusión, corte e instalación.",
    image: "/images/equipment-rental.jpg",
    alt: "Equipos especializados para instalación de sistemas PEX y HDPE disponibles para renta",
  },
  {
    name: "Ensayos de presión para tuberías",
    number: "02",
    text: "Pruebas controladas para verificar la integridad de las instalaciones antes de su puesta en servicio.",
    image: "/images/pressure-testing.jpg",
    alt: "Técnico realizando un ensayo de presión en una instalación de tubería HDPE",
  },
];

export const downloads = [
  { name: "Catálogos", type: "PDF", note: "PDF pendiente de subir" },
  { name: "Especificaciones técnicas", type: "PDF", note: "PDF pendiente de subir" },
  { name: "Manuales de instalación", type: "PDF", note: "PDF pendiente de subir" },
  { name: "Videos de instalación", type: "VIDEO", note: "Contenido pendiente de subir" },
  { name: "Certificaciones", type: "PDF", note: "PDF pendiente de subir" },
];

export const projects: Project[] = [
  {
    slug: "tiffany-doce",
    name: "Tiffany Doce",
    description: "Proyecto de referencia preparado para documentar el alcance, los retos técnicos y los resultados de la instalación.",
    image: "/images/tiffany-doce-building.jpg",
    alt: "Vista exterior del edificio residencial Tiffany Doce en Guatemala",
    products: ["Sistemas PEX", "Tubería HDPE"],
    location: "Guatemala",
    year: "Por confirmar",
  },
];

export const pexTypes = [
  { name: "PEX-A", method: "Peróxido", text: "Alta flexibilidad y capacidad de expansión, según el sistema y fabricante." },
  { name: "PEX-B", method: "Silano", text: "Reticulación mediante humedad y calor; ampliamente utilizado en plomería." },
  { name: "PEX-C", method: "Haz de electrones", text: "La tubería extruida se reticula mediante radiación de alta energía." },
];

export const pexAdvantages = [
  "Flexible: puede reducir codos y uniones ocultas.",
  "Resiste corrosión, incrustaciones y tuberculación.",
  "Ligero y fácil de transportar dentro de la obra.",
  "Disponible para agua fría y caliente según clasificación.",
  "Instalación mediante expansión, prensado o sistemas aprobados, sin cemento solvente.",
];

export const hdpeApplications = [
  "Redes de agua potable y conducción hidráulica",
  "Sistemas contra incendios técnicamente aprobados",
  "Aguas residuales, industria y minería",
  "Riego, bombeo e instalaciones enterradas",
];
