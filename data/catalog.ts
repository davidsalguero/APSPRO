export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  spec: string;
  accent: string;
};

export const categories = [
  {
    name: "Conducción industrial",
    description: "Sistemas para agua, químicos y procesos de alta exigencia.",
    count: "12 soluciones",
    code: "CI",
  },
  {
    name: "Control de flujo",
    description: "Válvulas, actuadores y accesorios para operación precisa.",
    count: "18 soluciones",
    code: "CF",
  },
  {
    name: "Equipos de proceso",
    description: "Componentes modulares para integración y mantenimiento.",
    count: "9 soluciones",
    code: "EP",
  },
];

export const products: Product[] = [
  {
    slug: "tuberia-ntx-100",
    name: "Sistema de tubería NTX-100",
    category: "Conducción industrial",
    summary: "Línea modular de conducción para redes de proceso y distribución.",
    spec: "DN 25–630 · PN 10–25",
    accent: "cyan",
  },
  {
    slug: "valvula-vx-40",
    name: "Válvula de control VX-40",
    category: "Control de flujo",
    summary: "Control estable y mantenimiento simplificado para operación continua.",
    spec: "2”–12” · Clase 150",
    accent: "amber",
  },
  {
    slug: "colector-mx-8",
    name: "Colector modular MX-8",
    category: "Equipos de proceso",
    summary: "Distribución compacta con configuraciones adaptables a cada proyecto.",
    spec: "4–16 salidas · Acero 316L",
    accent: "slate",
  },
];

export const industries = [
  { name: "Agua e infraestructura", number: "01", text: "Redes de distribución, bombeo y tratamiento." },
  { name: "Minería", number: "02", text: "Transporte de fluidos abrasivos y servicios auxiliares." },
  { name: "Alimentos y bebidas", number: "03", text: "Componentes sanitarios para líneas de proceso." },
  { name: "Manufactura", number: "04", text: "Integración confiable para plantas y servicios industriales." },
];

export const advantages = [
  { metric: "24 h", label: "respuesta inicial a solicitudes" },
  { metric: "100%", label: "trazabilidad documental" },
  { metric: "+15", label: "años de experiencia simulada" },
  { metric: "6", label: "mercados regionales atendidos" },
];
