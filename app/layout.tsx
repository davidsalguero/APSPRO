import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APSPRO | Soluciones para proyectos exigentes",
  description:
    "Mockup demostrativo de un sitio corporativo para productos y soluciones industriales.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
