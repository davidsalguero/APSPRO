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
    icon: "/brand/aps-logo-mark.png",
    shortcut: "/brand/aps-logo-mark.png",
    apple: "/brand/aps-logo-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
