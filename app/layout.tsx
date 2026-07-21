import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apspro.net"),
  title: "APS | Sistemas PEX en Guatemala",
  description:
    "Distribución de tubería, conexiones y sistemas PEX de tecnología internacional para proyectos modernos en Guatemala.",
  applicationName: "APS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APS | Sistemas PEX en Guatemala",
    description:
      "Tecnología PEX para mejorar la calidad, confiabilidad y eficiencia de ejecución de proyectos en Guatemala.",
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
