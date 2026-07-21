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
    name: "Tubería PEX",
    description: "Soluciones flexibles para distribución de agua fría y caliente.",
    count: "Portafolio en definición",
    code: "PX",
  },
  {
    name: "Conexiones y accesorios",
    description: "Sistemas de unión compatibles para instalaciones seguras y repetibles.",
    count: "Portafolio en definición",
    code: "CA",
  },
  {
    name: "Colectores y distribución",
    description: "Control por circuitos para ordenar la instalación y facilitar el mantenimiento.",
    count: "Portafolio en definición",
    code: "CD",
  },
];

export const products: Product[] = [
  {
    slug: "tuberia-pex",
    name: "Tubería PEX",
    category: "Conducción de agua",
    summary: "Tubería flexible para redes modernas de agua fría y caliente.",
    spec: "Medidas y clasificación según fabricante",
    accent: "cyan",
  },
  {
    slug: "conexiones-pex",
    name: "Conexiones para PEX",
    category: "Unión e instalación",
    summary: "Accesorios diseñados para conexiones confiables y una ejecución ordenada.",
    spec: "Compatibilidad por sistema y fabricante",
    accent: "amber",
  },
  {
    slug: "colectores-pex",
    name: "Colectores de distribución",
    category: "Control por circuitos",
    summary: "Distribución centralizada para organizar consumos y facilitar intervenciones.",
    spec: "Configuración según proyecto",
    accent: "slate",
  },
];

export const industries = [
  { name: "Vivienda", number: "01", text: "Redes de agua fría y caliente con recorridos flexibles y organizados." },
  { name: "Edificios multifamiliares", number: "02", text: "Distribución eficiente por unidades, ramales o colectores." },
  { name: "Hoteles y comercio", number: "03", text: "Soluciones para proyectos que valoran rapidez, orden y mantenibilidad." },
  { name: "Proyectos institucionales", number: "04", text: "Alternativas para especificaciones técnicas de mayor escala." },
];

export const advantages = [
  { metric: "Flexible", label: "menos cambios de dirección y uniones potenciales" },
  { metric: "Ligero", label: "transporte y manipulación simplificados en obra" },
  { metric: "Sin llama", label: "métodos de unión sin soldadura abierta" },
  { metric: "Durable", label: "resistencia a corrosión y depósitos internos" },
];
