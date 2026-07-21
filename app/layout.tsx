import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apspro.net"),
  title: "APS | Soluciones para proyectos exigentes",
  description:
    "Mockup demostrativo de un sitio corporativo para productos y soluciones industriales.",
  applicationName: "APS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APS | Soluciones para proyectos exigentes",
    description:
      "Productos, soporte técnico y soluciones para sistemas industriales.",
    url: "https://apspro.net",
    siteName: "APS",
    locale: "es_GT",
    type: "website",
  },
  icons: {
    icon: "/brand/aps-favicon-full.png",
    shortcut: "/brand/aps-favicon-full.png",
    apple: "/brand/aps-favicon-full.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
