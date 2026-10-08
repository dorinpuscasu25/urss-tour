import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mulțumim", robots: { index: false, follow: false } };
export default function ThankYouPage() {
  return <section className="section thank-you"><div className="narrow"><span className="kicker">Solicitare înregistrată</span><h1>Mulțumim pentru interes!</h1><p>Cererea ta a fost salvată în acest browser.</p><p>Site-ul funcționează momentan în mod demonstrativ. Pentru confirmarea disponibilității, contactează-ne prin <Link className="text-link" href="/contact">pagina de contact</Link>.</p><div className="hero-actions"><Link className="button button-solid" href="/expeditii">Explorează expedițiile</Link><Link className="button" href="/">Înapoi la prima pagină</Link></div></div></section>;
}
