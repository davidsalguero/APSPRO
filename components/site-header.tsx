"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#tecnologia-pex", label: "PEX" },
  { href: "#hdpe", label: "HDPE" },
  { href: "#industrias", label: "Industrias" },
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
        <a className="brand" href="#inicio" aria-label="APS, inicio">
          <Image
            className="brand-logo"
            src="/brand/aps-logo-header.png"
            width={1200}
            height={437}
            alt="APS — Advanced Plumbing Systems"
            priority
          />
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
