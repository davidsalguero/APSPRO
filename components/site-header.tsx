"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#acerca-de", label: "Acerca de" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#descargas", label: "Descargas" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <a className="brand" href="#inicio" aria-label="APS, ir al inicio">
          <Image className="brand-logo" src="/brand/aps-logo-header.png" width={1200} height={437} alt="APS — Advanced Plumbing Systems" priority />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <i /><i /><i />
        </button>
        <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-cta" href="#contacto" onClick={() => setOpen(false)}>Cotizar <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <div className="pex-pipe-ribbon" aria-hidden="true">
        <span className="pex-ribbon-pipe pex-ribbon-blue"><b>PEX-A · APS · AGUA FRÍA · PEX-A · APS · AGUA FRÍA · PEX-A · APS · AGUA FRÍA</b></span>
        <span className="pex-ribbon-pipe pex-ribbon-white"><b>PEX-AL-PEX · APS · MULTICAPA · PEX-AL-PEX · APS · MULTICAPA · PEX-AL-PEX</b></span>
        <span className="pex-ribbon-pipe pex-ribbon-red"><b>PEX-A · APS · AGUA CALIENTE · PEX-A · APS · AGUA CALIENTE · PEX-A · APS</b></span>
        <span className="pex-ribbon-pipe pex-ribbon-yellow"><b>PEX-AL-PEX · APS · GAS · PEX-AL-PEX · APS · GAS · PEX-AL-PEX · APS · GAS</b></span>
      </div>
    </header>
  );
}
