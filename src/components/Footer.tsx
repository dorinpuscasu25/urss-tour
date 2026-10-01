"use client";

import Link from "next/link";
import { ArrowRight, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export function Footer() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return (
    <footer className="footer">
      <div className="shell footer-newsletter">
        <div><span className="kicker light">Jurnal de drum</span><h2>O rută nouă, din când în când.</h2></div>
        {sent ? <p className="newsletter-success">Te-ai înscris. Următoarea poveste vine pe email.</p> : (
          <form onSubmit={submit} className="newsletter-form"><label className="sr-only" htmlFor="newsletter">Adresa de email</label><input required type="email" id="newsletter" placeholder="email@exemplu.com" /><button aria-label="Abonează-te"><ArrowRight /></button></form>
        )}
      </div>
      <div className="shell footer-main">
        <div className="footer-brand"><div className="brand brand-light"><span className="brand-mark">RR</span><span><strong>Red Route</strong><small>Expediții cu poveste</small></span></div><p>Călătorii cu context, oameni locali și timp să înțelegi locurile.</p></div>
        <div><p className="footer-label">Explorează</p><Link href="/expeditii">Toate expedițiile</Link><Link href="/despre">Despre noi</Link><Link href="/contact">Contact</Link></div>
        <div><p className="footer-label">Informații</p><Link href="/termeni">Termeni și condiții</Link><Link href="/confidentialitate">Confidențialitate</Link><a href="tel:+37360000000">+373 60 000 000</a></div>
        <div><p className="footer-label">Urmărește drumul</p><a href="https://instagram.com" target="_blank" rel="noreferrer"><InstagramLogo /> Instagram</a><a href="https://wa.me/37360000000" target="_blank" rel="noreferrer"><WhatsappLogo /> WhatsApp</a></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Red Route</span><span>Chișinău, Republica Moldova</span><span>Site demonstrativ</span></div>
    </footer>
  );
}
