"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import { tours } from "@/data/tours";

export function ContactForm({ compact = false, tourTitle }: { compact?: boolean; tourTitle?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const requests = JSON.parse(localStorage.getItem("red-route-requests") || "[]");
      localStorage.setItem("red-route-requests", JSON.stringify([...requests, { ...data, tour: tourTitle || data.tour || "general", createdAt: new Date().toISOString() }]));
      router.push("/multumim");
    } catch { setError("Cererea nu a putut fi salvată. Încearcă din nou sau contactează-ne direct."); }
  }
  return (
    <form className={`contact-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit}>
      <div className="field-row"><label><span>Nume complet *</span><input autoComplete="name" name="name" required placeholder="Cum te numești?" /></label><label><span>Email *</span><input autoComplete="email" name="email" type="email" required placeholder="email@exemplu.com" /></label></div>
      <div className="field-row"><label><span>Telefon</span><input autoComplete="tel" name="phone" type="tel" placeholder="+373 ..." /></label><label><span>Perioada dorită</span><input name="date" type="date" /></label></div>
      {!tourTitle && <label><span>Expediție de interes</span><select name="tour" defaultValue="Nu știu încă"><option>Nu știu încă</option>{tours.map(tour => <option key={tour.slug}>{tour.title}</option>)}</select></label>}
      <div className="field-row"><label><span>Număr de persoane</span><select name="guests" defaultValue="2"><option value="1">1 persoană</option><option value="2">2 persoane</option><option value="3">3 persoane</option><option value="4+">4+ persoane</option></select></label><label><span>Limba turului</span><select name="language"><option>Română</option><option>English</option><option>Русский</option></select></label></div>
      <label><span>{tourTitle ? "Observații" : "Spune-ne ce fel de călătorie cauți"}</span><textarea name="message" rows={compact ? 3 : 5} placeholder="Interese, date aproximative, număr de persoane..." /></label>
      <label className="checkbox"><input required type="checkbox" /><span>Sunt de acord cu prelucrarea datelor pentru a fi contactat.</span></label>
      {error && <p role="alert">{error}</p>}
      <p className="form-note">Versiune demonstrativă: cererea se salvează în acest browser.</p>
      <button className="button button-solid" type="submit">{tourTitle ? "Trimite cererea de rezervare" : "Trimite solicitarea"}<PaperPlaneTilt weight="bold" /></button>
    </form>
  );
}
