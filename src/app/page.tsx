import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { TourCard } from "@/components/TourCard";
import { Reviews } from "@/components/Reviews";
import { BookingSection } from "@/components/BookingSection";
import { tours } from "@/data/tours";

const journal = [
  { title: "De ce încă ne fascinează arhitectura sovietică?", tag: "Arhitectură · 7 min", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85", text: "O privire dincolo de beton, spre ideile și oamenii care au locuit aceste spații." },
  { title: "Un ghid scurt pentru Tiraspol", tag: "Ghid practic · 5 min", image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=900&q=85", text: "Ce merită să știi înainte de prima vizită." },
  { title: "Mașinile care au pus estul în mișcare", tag: "Povești · 4 min", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85", text: "De la obiect utilitar la capsulă a timpului." },
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="home-hero-bg"><Image src="https://images.unsplash.com/photo-1585488614694-1e8bb2477922?auto=format&fit=crop&w=2200&q=90" alt="Mașină sovietică de epocă" fill priority sizes="100vw" /></div>
      <span className="hero-index">01</span>
      <div className="shell home-hero-content">
        <span className="kicker light">Moldova · Europa de Est · Din 2018</span>
        <h1>Nu bifăm locuri.<br /><em>Le deschidem.</em></h1>
        <div className="hero-intro">
          <div><p className="hero-copy">Expediții în grupuri mici, construite în jurul poveștilor pe care nu le găsești în ghidurile clasice. Cu oameni locali, acces atent și suficient timp să înțelegi.</p><div className="hero-actions"><Link className="button button-solid" href="/expeditii">Descoperă expedițiile <ArrowRight /></Link><Link className="button button-light" href="/despre">Cum călătorim</Link></div></div>
          <div className="hero-ticket"><span className="stamp-round">RUTĂ<br />VERIFICATĂ</span><strong>Grupuri de maximum 8</strong><small>Tururi private · Română / English / Русский</small></div>
        </div>
      </div>
    </section>

    <section className="section" id="expeditii">
      <div className="shell">
        <span className="kicker">Rute selectate</span>
        <div className="section-heading"><h2>Călătorii care lasă urme.</h2><p>Fiecare rută este testată de noi, documentată și adaptată ritmului grupului.</p></div>
        <div className="tour-grid">{tours.slice(0,4).map((tour,index)=><TourCard tour={tour} index={index} key={tour.slug} />)}</div>
        <div style={{marginTop:48,textAlign:"center"}}><Link className="button" href="/expeditii">Vezi toate expedițiile <ArrowUpRight /></Link></div>
      </div>
    </section>

    <section className="section manifesto">
      <div className="shell manifesto-grid">
        <div><span className="kicker light">Manifestul nostru</span><h2>Mai puțin spectacol. Mai mult adevăr.</h2><p className="manifesto-copy">Nu romantizăm trecutul și nu transformăm locurile în decor. Călătorim cu curiozitate, respect și un ghid care poate pune fiecare oprire în context.</p></div>
        <div className="principles">
          <div className="principle"><div><h3>Grupuri cu adevărat mici</h3><p>De obicei 2–8 oameni. Destul de puțini pentru conversații, opriri spontane și acces responsabil.</p></div></div>
          <div className="principle"><div><h3>Ghizi locali, nu texte memorate</h3><p>Oameni care cunosc locul, limbile și nuanțele lui — și care răspund onest când lucrurile sunt complicate.</p></div></div>
          <div className="principle"><div><h3>Program flexibil</h3><p>Un traseu clar, dar nu rigid. Dacă o poveste cere încă zece minute, nu ne grăbim spre următoarea bifă.</p></div></div>
          <div className="principle"><div><h3>Preț fără surprize</h3><p>Îți spunem de la început ce este inclus, ce este opțional și de ce costă fiecare experiență.</p></div></div>
        </div>
      </div>
    </section>

    <Reviews />

    <section className="section" id="jurnal">
      <div className="shell"><span className="kicker">Note de teren</span><div className="section-heading"><h2>Locuri, oameni, context.</h2><p>Fragmente din drum și idei pentru călătoria ta.</p></div><div className="journal-grid">{journal.map(item=><article className="journal-card" key={item.title}><div className="journal-img"><Image src={item.image} alt="" fill sizes="(max-width:900px) 100vw,40vw" /></div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
    </section>
    <section className="section home-about"><div className="shell home-about-layout"><div><span className="kicker">Povestea noastră</span><h2>De la o pasiune pentru arhive, la expediții tematice</h2><p>Am pornit ca un grup mic de pasionați de istorie est-europeană care voiau să vadă cu ochii lor locurile despre care citeau în arhive. Astăzi organizăm expediții documentate istoric prin fostul spațiu sovietic, pentru oameni curioși, nu pentru turiști grăbiți.</p><Link className="button" href="#rezervare">Programează o discuție <ArrowRight /></Link></div><div className="home-about-note"><span className="kicker">Din 2018</span><p>Cercetare înainte de plecare.<br />Oameni locali alături.<br />Timp pentru întrebări.</p><Link className="text-link" href="/despre">Cunoaște echipa <ArrowUpRight /></Link></div></div></section>
    <BookingSection />
  </>;
}
