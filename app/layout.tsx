import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apspro.net"),
  title: "APS Guatemala | Sistemas PEX, HDPE y soluciones hidráulicas",
  description:
    "Distribución de tubería PEX, HDPE, accesorios, herramientas y servicios para plomería, gas, climatización y protección contra incendios en Guatemala.",
  applicationName: "APS",
  keywords: ["tubería PEX Guatemala", "tubería HDPE Guatemala", "PEX-A", "PEX-AL-PEX", "electrofusión HDPE", "sistemas contra incendios"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APS Guatemala | Sistemas PEX y HDPE",
    description:
      "Tecnologías PEX y HDPE para mejorar la calidad, confiabilidad y eficiencia de proyectos en Guatemala.",
    url: "https://apspro.net",
    siteName: "APS",
    locale: "es_GT",
    type: "website",
    images: [{ url: "/images/tiffany-doce.jpg", width: 1536, height: 1024, alt: "Instalación moderna de sistemas PEX y HDPE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "APS Guatemala | Sistemas PEX y HDPE",
    description: "Soluciones modernas para instalaciones hidráulicas, gas, climatización y protección contra incendios.",
    images: ["/images/tiffany-doce.jpg"],
  },
  icons: {
    icon: "/brand/aps-favicon-white.png",
    shortcut: "/brand/aps-favicon-white.png",
    apple: "/brand/aps-favicon-white.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
