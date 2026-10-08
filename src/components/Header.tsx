"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = [
  ["Expediții", "/expeditii"],
  ["Despre noi", "/despre"],
  ["Jurnal", "/#jurnal"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="shell header-row">
        <Link className="brand" href="/" aria-label="Red Route — pagina principală">
          <span className="brand-mark">RR</span>
          <span><strong>Red Route</strong><small>Expediții cu poveste</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigație principală">
          {links.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="button button-small desktop-cta" href="/contact">Planifică o călătorie <ArrowUpRight weight="bold" /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Închide meniul" : "Deschide meniul"}>
          {open ? <X size={24} /> : <List size={26} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href], index) => <Link href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
          <Link className="button" href="/contact" onClick={() => setOpen(false)}>Planifică o călătorie <ArrowUpRight /></Link>
        </div>
      )}
    </header>
  );
}
