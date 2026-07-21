import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apspro.net"),
  title: "APS | Sistemas PEX y HDPE en Guatemala",
  description:
    "Distribución de tubería, conexiones y sistemas PEX y HDPE de tecnología internacional para proyectos en Guatemala.",
  applicationName: "APS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APS | Sistemas PEX y HDPE en Guatemala",
    description:
      "Tecnologías PEX y HDPE para mejorar la calidad, confiabilidad y eficiencia de proyectos en Guatemala.",
    url: "https://apspro.net",
    siteName: "APS",
    locale: "es_GT",
    type: "website",
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
