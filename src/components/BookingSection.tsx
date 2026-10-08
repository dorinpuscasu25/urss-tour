import { ContactForm } from "./ContactForm";

export function BookingSection({ tourTitle }: { tourTitle?: string }) {
  return <section className="section booking-section" id="rezervare"><div className="shell booking-layout"><div><span className="kicker light">Următorul pas</span><h2>{tourTitle ? "Ți-ar plăcea să fii aici?" : "Vrei să pleci într-o expediție?"}</h2><p>Lasă-ne datele tale și un consultant te contactează pentru detalii și disponibilitate.</p><p>Trimite-ne perioada și numărul de persoane. Confirmăm toate detaliile înainte de rezervare.</p></div><ContactForm tourTitle={tourTitle} compact /></div></section>;
}
