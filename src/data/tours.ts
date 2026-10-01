export type Tour = {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  category: "Urban" | "Istorie" | "Transfer" | "Drum lung";
  duration: string;
  group: string;
  price: number;
  label: string;
  summary: string;
  description: string;
  hero: string;
  gallery: string[];
  highlights: { title: string; text: string }[];
  route: { time: string; title: string; text: string }[];
  included: string[];
  notIncluded: string[];
};

const images = {
  car: "https://images.unsplash.com/photo-1585488614694-1e8bb2477922?auto=format&fit=crop&w=1600&q=85",
  city: "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&w=1600&q=85",
  arch: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  wheel: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85",
  street: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85",
  monument: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1600&q=85",
  bunker: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
  tunnel: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
  concrete: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85",
  tiraspol: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1600&q=85",
  field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
  airport: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85",
  wine: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
  road: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=85",
  village: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",
};

export const tours: Tour[] = [
  {
    slug: "chisinau-masina-retro",
    title: "Tur al Chișinăului cu mașină retro",
    shortTitle: "Chișinău retro",
    location: "Chișinău",
    category: "Urban",
    duration: "3 ore",
    group: "1–3 persoane",
    price: 95,
    label: "Cel mai ales",
    summary: "Capitala văzută prin parbrizul unei mașini sovietice autentice, alături de un ghid care îi știe poveștile.",
    description: "O plimbare atent construită prin Chișinăul monumental și cartierele sale mai puțin cunoscute. Urcăm într-o mașină de epocă, urmărim urmele orașului sovietic și punem clădirile în context — fără lecții rigide, cu timp pentru întrebări și fotografii.",
    hero: images.car,
    gallery: [images.car, images.city, images.arch, images.wheel, images.street, images.monument],
    highlights: [
      { title: "Vehicul autentic", text: "Mașină de epocă restaurată și pregătită pentru traseu, nu o simplă recuzită." },
      { title: "Povești din oraș", text: "Arhitectură, viață cotidiană și istorie locală explicate clar, cu nuanțe." },
      { title: "Traseu flexibil", text: "Adaptăm opririle la ritmul și interesele tale: foto, arhitectură sau istorie." },
    ],
    route: [
      { time: "00:00", title: "Pornire din centrul istoric", text: "Ne întâlnim lângă Arcul de Triumf, facem cunoștință cu mașina și stabilim ritmul." },
      { time: "00:35", title: "Chișinăul monumental", text: "Clădiri administrative, mozaicuri și bulevarde gândite pentru un oraș nou." },
      { time: "01:30", title: "Cartiere și micro-raioane", text: "Vedem cum ideologia s-a tradus în locuire, spațiu public și viață de zi cu zi." },
      { time: "02:30", title: "Oprire foto și concluzii", text: "O ultimă oprire într-un loc panoramic și recomandări pentru restul șederii." },
    ],
    included: ["Mașină retro cu șofer", "Ghid local în română sau engleză", "Combustibil și toate opririle", "Apă îmbuteliată"],
    notIncluded: ["Mese și băuturi suplimentare", "Intrări la muzee opționale", "Transfer din afara Chișinăului"],
  },
  {
    slug: "buncarul-oliscani",
    title: "Buncărul secret de la Olișcani",
    shortTitle: "Buncărul Olișcani",
    location: "Olișcani",
    category: "Istorie",
    duration: "6 ore",
    group: "2–8 persoane",
    price: 120,
    label: "Acces special",
    summary: "O incursiune ghidată într-un complex subteran abandonat, ascuns într-o pădure din nordul Moldovei.",
    description: "Plecăm din Chișinău spre unul dintre cele mai neobișnuite situri ale Moldovei. Aflăm de ce a fost construit complexul, cum trebuia să funcționeze și de ce a rămas neterminat. Vizita este organizată responsabil, cu echipament și ghidaj.",
    hero: images.bunker,
    gallery: [images.bunker, images.tunnel, images.concrete, images.field, images.road, images.monument],
    highlights: [
      { title: "Loc inaccesibil turismului clasic", text: "Ajungi într-un sit rar, cu context și reguli clare de siguranță." },
      { title: "Documentare serioasă", text: "Separăm faptele, mărturiile locale și legendele apărute în jurul buncărului." },
      { title: "Grup restrâns", text: "Vizita rămâne confortabilă și fiecare participant poate discuta cu ghidul." },
    ],
    route: [
      { time: "08:30", title: "Plecarea din Chișinău", text: "Transfer privat spre nord, cu introducere în contextul Războiului Rece." },
      { time: "10:30", title: "Sosire la Olișcani", text: "Instructaj de siguranță, echipare și scurtă plimbare prin pădure." },
      { time: "11:00", title: "Explorarea complexului", text: "Parcurgem zonele accesibile și reconstruim funcțiile planificate ale spațiilor." },
      { time: "13:00", title: "Întoarcere", text: "Pauză pentru gustare și revenire în Chișinău în jurul orei 15:00." },
    ],
    included: ["Transport dus–întors", "Ghid specializat", "Lanternă și cască de protecție", "Apă și gustare locală"],
    notIncluded: ["Prânzul", "Îmbrăcăminte impermeabilă", "Asigurare personală de călătorie"],
  },
  {
    slug: "transnistria-masina-retro",
    title: "Transnistria cu mașină retro",
    shortTitle: "Transnistria retro",
    location: "Tiraspol & Bender",
    category: "Istorie",
    duration: "1 zi",
    group: "1–3 persoane",
    price: 185,
    label: "Experiență completă",
    summary: "Tiraspol și Bender într-o călătorie de o zi, cu mașină clasică, ghid local și mult context.",
    description: "O zi construită pentru a înțelege regiunea dincolo de simbolurile vizibile. Vizităm Tiraspol și Bender, discutăm despre istorie, identitate și viața cotidiană și lăsăm timp pentru o masă locală și observație.",
    hero: images.tiraspol,
    gallery: [images.tiraspol, images.monument, images.car, images.street, images.arch, images.field],
    highlights: [
      { title: "Două orașe într-o zi", text: "Un traseu echilibrat între repere, viață locală și timp liber." },
      { title: "Context fără senzaționalism", text: "Primești explicații clare despre situația regiunii și istoria ei recentă." },
      { title: "Mașină clasică", text: "Experiența drumului face parte din poveste și păstrează grupul flexibil." },
    ],
    route: [
      { time: "08:00", title: "Chișinău → Bender", text: "Pornim devreme și explicăm formalitățile înainte de intrarea în regiune." },
      { time: "10:00", title: "Cetatea Bender", text: "Vizită ghidată și context despre rolul strategic al locului." },
      { time: "12:00", title: "Tiraspol", text: "Bulevardul central, monumente, piața și o masă într-un local ales de noi." },
      { time: "17:00", title: "Drumul spre Chișinău", text: "Revenire cu oprire scurtă, în funcție de timp și interese." },
    ],
    included: ["Transport privat cu mașină retro", "Ghid local", "Asistență la formalități", "Apă"],
    notIncluded: ["Masa de prânz", "Bilete de intrare", "Cheltuieli personale"],
  },
  {
    slug: "intampinare-aeroport-retro",
    title: "Întâmpinare la aeroport în stil moldovenesc",
    shortTitle: "Welcome retro",
    location: "Aeroport Chișinău",
    category: "Transfer",
    duration: "1,5 ore",
    group: "1–3 persoane",
    price: 75,
    label: "Cadou memorabil",
    summary: "Primire cu pâine și sare, mașină retro și un transfer în oraș care devine prima poveste a călătoriei.",
    description: "Transformăm sosirea într-un moment memorabil. Te așteptăm la terminal cu numele tău, pâine și sare, te ajutăm cu bagajele și facem un scurt tur de orientare înainte de hotel.",
    hero: images.airport,
    gallery: [images.airport, images.bread, images.car, images.city, images.wheel, images.street],
    highlights: [
      { title: "Primire personalizată", text: "Pancartă cu numele oaspetelui și coordonare după ora reală a zborului." },
      { title: "Tradiție locală", text: "Pâine, sare și o explicație scurtă a obiceiului de bun venit." },
      { title: "Transfer cu poveste", text: "Primele repere ale Chișinăului apar firesc pe drumul spre cazare." },
    ],
    route: [
      { time: "Sosire", title: "Întâlnire în terminal", text: "Urmărim zborul și așteptăm la ieșirea din zona de bagaje." },
      { time: "+15 min", title: "Ritual de bun venit", text: "Pâine și sare, fotografii și prezentarea mașinii." },
      { time: "+30 min", title: "Transfer panoramic", text: "Intrăm în oraș pe un traseu cu primele repere și recomandări utile." },
      { time: "+75 min", title: "Sosire la hotel", text: "Te ajutăm cu bagajele și ne asigurăm că check-in-ul merge bine." },
    ],
    included: ["Monitorizarea zborului", "Întâmpinare personalizată", "Pâine și sare", "Transfer în Chișinău"],
    notIncluded: ["Transfer în afara municipiului", "Timp de așteptare peste 90 minute", "Băuturi alcoolice"],
  },
  {
    slug: "moldova-tur-masina-retro",
    title: "Moldova pe drumuri secundare",
    shortTitle: "Moldova retro",
    location: "Orhei & Cricova",
    category: "Drum lung",
    duration: "2 zile",
    group: "2–6 persoane",
    price: 290,
    label: "Nou",
    summary: "Sate, vinării, brutalism și peisaje — două zile de explorare lentă, departe de traseul standard.",
    description: "Un circuit compact pentru cei care vor să vadă Moldova dincolo de capitală. Alternăm drumurile secundare, poveștile locale și opririle bune de fotografiat cu gastronomie și o noapte într-o pensiune de familie.",
    hero: images.road,
    gallery: [images.road, images.village, images.wine, images.field, images.arch, images.car],
    highlights: [
      { title: "Ritm de road trip", text: "Fără alergare între obiective; avem loc pentru opriri spontane și conversații." },
      { title: "Gazde locale", text: "Mâncăm și dormim în locuri mici, alese pentru caracter și ospitalitate." },
      { title: "Moldova în contrast", text: "Punem alături peisajul rural, patrimoniul sovietic și cultura vinului." },
    ],
    route: [
      { time: "Ziua 1", title: "Chișinău → Orhei", text: "Arhitectură, sate și prânz local; seara ajungem la pensiune." },
      { time: "Seara", title: "Cină și povești", text: "Meniu de sezon, vin de casă și timp fără program rigid." },
      { time: "Ziua 2", title: "Drumul vinului", text: "Vizită la o cramă, degustare și opriri foto pe traseu." },
      { time: "18:00", title: "Înapoi în Chișinău", text: "Sosire estimată în centru sau transfer direct la hotel." },
    ],
    included: ["Transport pe tot traseul", "Ghid însoțitor", "O noapte la pensiune", "Mic dejun și o degustare"],
    notIncluded: ["Prânzurile și cina", "Supliment cameră single", "Asigurare de călătorie"],
  },
];

export const tourBySlug = (slug: string) => tours.find((tour) => tour.slug === slug);
