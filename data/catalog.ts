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
    name: "Sistemas PEX",
    description: "Tubería flexible, conexiones y colectores para agua fría y caliente.",
    count: "Portafolio en definición",
    code: "PX",
  },
  {
    name: "Tubería HDPE",
    description: "Sistemas de polietileno de alta densidad para redes municipales e industriales.",
    count: "Portafolio en definición",
    code: "HD",
  },
  {
    name: "Unión y accesorios",
    description: "Conexiones, colectores y soluciones de fusión compatibles con cada sistema.",
    count: "Portafolio en definición",
    code: "UA",
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
  {
    slug: "tuberia-hdpe",
    name: "Tubería HDPE",
    category: "Redes de presión",
    summary: "Polietileno de alta densidad para agua, minería, industria y conducción enterrada.",
    spec: "DR/SDR y presión según resina y norma",
    accent: "cyan",
  },
];

export const industries = [
  { name: "Agua potable", number: "01", text: "Redes de distribución, líneas de servicio y conducción municipal." },
  { name: "Aguas residuales", number: "02", text: "Impulsiones, colectores y rehabilitación de tuberías." },
  { name: "Minería y canteras", number: "03", text: "Relaves, pulpas abrasivas, drenaje y agua de proceso." },
  { name: "Industria y energía", number: "04", text: "Agua de enfriamiento, procesos y conducción de químicos compatibles." },
  { name: "Agricultura", number: "05", text: "Riego, captación, bombeo y conducción en terrenos variables." },
  { name: "Instalación sin zanja", number: "06", text: "Perforación dirigida, sliplining y proyectos con mínima intervención." },
];

export const advantages = [
  { metric: "Flexible", label: "menos cambios de dirección y uniones potenciales" },
  { metric: "Ligero", label: "transporte y manipulación simplificados en obra" },
  { metric: "Sin llama", label: "métodos de unión sin soldadura abierta" },
  { metric: "Durable", label: "resistencia a corrosión y depósitos internos" },
];

export const pexTypes = [
  {
    name: "PEX-a",
    process: "Peróxido",
    text: "La reticulación ocurre durante la extrusión mediante peróxidos. Suele ofrecer alta flexibilidad y capacidad de expansión, según el sistema del fabricante.",
  },
  {
    name: "PEX-b",
    process: "Silano",
    text: "La reticulación se desarrolla después de la extrusión mediante humedad y calor. Es una tecnología ampliamente utilizada en sistemas de plomería.",
  },
  {
    name: "PEX-c",
    process: "Haz de electrones",
    text: "La tubería ya extruida se somete a radiación de alta energía para producir la reticulación molecular.",
  },
];

export const pexProperties = [
  "Flexibilidad y radios de curvatura que pueden reducir accesorios",
  "Resistencia a corrosión, tuberculación y depósitos",
  "Capacidad para servicio de agua fría y caliente según clasificación",
  "Bajo peso y facilidad de manipulación en obra",
  "Amortiguación de ruido, golpe de ariete y ciertas cargas por congelamiento",
  "Métodos de unión mecánicos o por expansión, sin cemento solvente",
];

export const pexVsPvc = [
  { property: "Configuración", pex: "Flexible; disponible en rollos y tramos.", pvc: "Rígido; normalmente instalado en tramos rectos." },
  { property: "Cambios de dirección", pex: "Puede curvarse dentro del radio permitido y reducir codos.", pvc: "Requiere accesorios para la mayoría de cambios de dirección." },
  { property: "Unión", pex: "Expansión, prensado, crimpado u otros sistemas aprobados.", pvc: "Comúnmente campana, junta elastomérica o cemento solvente." },
  { property: "Temperatura", pex: "Existen productos clasificados para agua fría y caliente.", pvc: "El PVC convencional se usa principalmente en agua fría; CPVC es un material distinto para mayor temperatura." },
  { property: "Corrosión", pex: "No se oxida ni presenta corrosión metálica.", pvc: "Tampoco se oxida; su compatibilidad química debe verificarse." },
  { property: "Selección", pex: "Debe especificarse como sistema compatible de tubería y accesorios.", pvc: "Debe definirse norma, clase, diámetro, unión y aplicación." },
];

export const hdpeIndustries = industries;

export const hdpeSdr = [
  { dr: "DR 9", wall: "11.11% del OD", reference: "Mayor espesor; PE4710 suele asociarse a 250 psi a 23 °C." },
  { dr: "DR 11", wall: "9.09% del OD", reference: "Espesor intermedio; PE4710 suele asociarse a 200 psi a 23 °C." },
  { dr: "DR 13.5", wall: "7.41% del OD", reference: "Alternativa para presiones menores y mayor diámetro interior." },
  { dr: "DR 17", wall: "5.88% del OD", reference: "Pared más delgada; PE4710 suele asociarse a 125 psi a 23 °C." },
];

export const wallComparison = [
  { material: "PVC 250 psi", standard: "ASTM D2241 · SDR 17", thickness: "0.265″", relative: "Base" },
  { material: "HDPE PE4710", standard: "DR 11", thickness: "0.409″", relative: "≈ 55% más pared" },
  { material: "HDPE PE4710", standard: "DR 9", thickness: "0.500″", relative: "≈ 89% más pared" },
];

export const hdpeVsGalvanized = [
  { property: "Corrosión", hdpe: "No se oxida y no requiere galvanizado ni protección catódica.", galvanized: "El zinc protege el acero, pero su consumo depende del agua, suelo, pH, sales y temperatura." },
  { property: "Uniones", hdpe: "Termofusión o electrofusión para formar una línea monolítica y autorrestringida.", galvanized: "Uniones roscadas, mecánicas o soldadas; cada conexión requiere control de corrosión y sello." },
  { property: "Peso y manejo", hdpe: "Aproximadamente una octava parte de la densidad del acero; flexible.", galvanized: "Más pesado y rígido; puede requerir mayor equipo de manejo y soporte." },
  { property: "Flujo interno", hdpe: "Superficie lisa que no tuberculiza y conserva su capacidad hidráulica.", galvanized: "Puede desarrollar corrosión o incrustación interna según la química del agua." },
  { property: "Cargas dinámicas", hdpe: "Material dúctil con buen comportamiento ante fatiga, golpe de ariete y movimiento del suelo.", galvanized: "Alta rigidez y resistencia mecánica, pero menor capacidad de acompañar deformaciones." },
  { property: "Temperatura y fuego", hdpe: "Sus límites de temperatura, expansión térmica y combustibilidad deben diseñarse cuidadosamente.", galvanized: "Ventaja en rigidez, exposición y temperaturas elevadas; el diseño debe considerar corrosión." },
];
