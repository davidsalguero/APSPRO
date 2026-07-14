"use client";

import { useState } from "react";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#industrias", label: "Industrias" },
  { href: "#empresa", label: "Empresa" },
  { href: "#proyectos", label: "Proyectos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Atención regional · Lun–Vie 8:00–17:00</span>
          <span className="utility-contact">ventas@apspro.net · +502 0000 0000</span>
        </div>
      </div>
      <div className="shell nav-wrap">
        <a className="brand" href="#inicio" aria-label="APSPRO, inicio">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>APSPRO</strong><small>INDUSTRIAL</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Abrir menú</span>
          <i /><i /><i />
        </button>
        <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-cta" href="#cotizar" onClick={() => setOpen(false)}>Solicitar cotización <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
