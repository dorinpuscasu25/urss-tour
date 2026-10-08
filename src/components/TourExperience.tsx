"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock, MapPin, UsersThree, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import type { Tour } from "@/data/tours";
import { BookingSection } from "./BookingSection";
import { Reviews } from "./Reviews";
import { Carousel } from "./Carousel";

export function TourExperience({ tour }: { tour: Tour }) {
  const [image,setImage] = useState<number|null>(null);
  useEffect(()=>{ document.body.style.overflow = image!==null ? "hidden" : ""; return()=>{document.body.style.overflow=""}},[image]);
  useEffect(()=>{function key(e:KeyboardEvent){if(e.key==="Escape"){setImage(null)} if(image!==null&&e.key==="ArrowRight")setImage((image+1)%tour.gallery.length);if(image!==null&&e.key==="ArrowLeft")setImage((image-1+tour.gallery.length)%tour.gallery.length)}window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[image,tour.gallery.length]);
  return <>
    <nav className="tour-subnav"><div className="shell"><div><a href="#poveste">Poveste</a><a href="#galerie">Galerie</a><a href="#traseu">Traseu</a><a href="#inclus">Inclus</a></div><a className="button button-small button-solid" href="#rezervare">Solicită rezervare</a></div></nav>
    <section className="tour-hero">
      <div className="tour-hero-image"><Image src={tour.hero} alt={tour.title} fill priority sizes="100vw" /></div>
      <div className="shell tour-hero-content"><div className="breadcrumbs"><Link href="/expeditii">Expediții</Link><span>/</span><span>{tour.shortTitle}</span></div><span className="kicker light">{tour.category} · {tour.location}</span><h1>{tour.title}</h1><p>{tour.summary}</p><a className="button button-solid" href="#rezervare">Rezervă această expediție <ArrowRight /></a></div>
      <div className="shell tour-facts"><div><Clock /><span>Durată<strong>{tour.duration}</strong></span></div><div><UsersThree /><span>Grup<strong>{tour.group}</strong></span></div><div><MapPin /><span>Punct de pornire<strong>Chișinău</strong></span></div><div><span>Preț de la</span><strong className="fact-price">€{tour.price}</strong><small>/ grup</small></div></div>
    </section>
    <section className="section" id="poveste"><div className="shell tour-story"><div><span className="kicker">De ce această rută</span><h2>Nu este doar un tur.</h2></div><div><p className="lead-copy">{tour.description}</p><p>Înainte de plecare discutăm cu tine despre interese, ritm și orice nevoie specială. Itinerarul de mai jos este punctul de pornire — experiența finală rămâne personală.</p></div></div><div className="shell highlight-grid">{tour.highlights.map((h,i)=><article key={h.title}><span>0{i+1}</span><h3>{h.title}</h3><p>{h.text}</p></article>)}</div></section>
    <section className="section gallery-section" id="galerie"><div className="shell"><span className="kicker">Jurnal vizual</span><div className="section-heading"><h2>Privește mai aproape.</h2><p>Apasă pe orice fotografie pentru galeria completă.</p></div><Carousel label="Fotografii">{tour.gallery.map((src,i)=><button className="gallery-photo" key={src} onClick={()=>setImage(i)} aria-label={`Deschide fotografia ${i+1}`}><Image src={src} alt={`${tour.title}, fotografia ${i+1}`} fill sizes="(max-width:650px) 100vw,50vw" /><span>0{i+1}</span></button>)}</Carousel></div></section>
    <section className="section route-section" id="traseu"><div className="shell"><span className="kicker">Plan orientativ</span><div className="section-heading"><h2>Firul călătoriei.</h2><p>Programul este orientativ. Păstrăm timp pentru opriri, întrebări și povești.</p></div><Carousel label="Itinerar">{(tour.itinerary ?? tour.route.map(stop => ({ title: stop.title, label: stop.time, image: tour.hero, activities: [stop.text] }))).map(day => <article className="itinerary-card" key={day.title}><div className="itinerary-image"><Image src={day.image} alt={day.title} fill sizes="(max-width:650px) 100vw,70vw" /></div><div className="itinerary-body"><span className="kicker">{day.label}</span><h3>{day.title}</h3><ul>{day.activities.map(activity => <li key={activity}>{activity}</li>)}</ul></div></article>)}</Carousel></div></section>
    <section className="section" id="inclus"><div className="shell included-layout"><div><span className="kicker">Fără litere mici</span><h2>Ce intră în preț.</h2><p>Confirmăm toate detaliile și costul final înainte să rezervi. Pentru grupuri mai mari, pregătim o ofertă separată.</p></div><div className="included-box"><h3>Inclus</h3>{tour.included.map(item=><p key={item}><Check weight="bold" />{item}</p>)}</div><div className="included-box muted-box"><h3>Neinclus</h3>{tour.notIncluded.map(item=><p key={item}><X />{item}</p>)}</div></div></section>
    <Reviews />
    <BookingSection tourTitle={tour.title} />
    {image!==null&&<div className="lightbox" role="dialog" aria-modal="true"><button className="lightbox-close" onClick={()=>setImage(null)} aria-label="Închide galeria"><X /></button><button className="lightbox-prev" onClick={()=>setImage((image-1+tour.gallery.length)%tour.gallery.length)} aria-label="Imaginea precedentă"><ArrowLeft /></button><div className="lightbox-image"><Image src={tour.gallery[image]} alt={`${tour.title}, imagine mărită`} fill sizes="95vw" /></div><button className="lightbox-next" onClick={()=>setImage((image+1)%tour.gallery.length)} aria-label="Imaginea următoare"><ArrowRight /></button><span className="lightbox-count">{image+1} / {tour.gallery.length}</span></div>}
  </>;
}
