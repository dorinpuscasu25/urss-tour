"use client";

import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export function ContactForm({ compact = false, tourTitle }: { compact?: boolean; tourTitle?: string }) {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const requests = JSON.parse(localStorage.getItem("red-route-requests") || "[]");
    localStorage.setItem("red-route-requests", JSON.stringify([...requests, { ...data, tour: tourTitle || "general", createdAt: new Date().toISOString() }]));
    setSent(true);
  }
  if (sent) return <div className="form-success"><CheckCircle size={42} weight="duotone" /><h3>Cererea a fost înregistrată</h3><p>Acesta este un prototip: datele au fost salvate local în browser. În versiunea finală vor ajunge în CRM și pe email.</p><button className="text-link" onClick={() => setSent(false)}>Trimite o altă cerere</button></div>;
  return (
    <form className={`contact-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit}>
      <div className="field-row"><label><span>Nume complet *</span><input name="name" required placeholder="Cum te numești?" /></label><label><span>Email *</span><input name="email" type="email" required placeholder="email@exemplu.com" /></label></div>
      <div className="field-row"><label><span>Telefon</span><input name="phone" type="tel" placeholder="+373 ..." /></label><label><span>Perioada dorită</span><input name="date" type="date" /></label></div>
      {tourTitle && <div className="field-row"><label><span>Număr de persoane</span><select name="guests" defaultValue="2"><option value="1">1 persoană</option><option value="2">2 persoane</option><option value="3">3 persoane</option><option value="4+">4+ persoane</option></select></label><label><span>Limba turului</span><select name="language"><option>Română</option><option>English</option><option>Русский</option></select></label></div>}
      <label><span>{tourTitle ? "Observații" : "Spune-ne ce fel de călătorie cauți"}</span><textarea name="message" rows={compact ? 3 : 5} placeholder="Interese, date aproximative, număr de persoane..." /></label>
      <label className="checkbox"><input required type="checkbox" /><span>Sunt de acord cu prelucrarea datelor pentru a fi contactat.</span></label>
      <button className="button button-solid" type="submit">{tourTitle ? "Trimite cererea de rezervare" : "Trimite solicitarea"}<PaperPlaneTilt weight="bold" /></button>
    </form>
  );
}
