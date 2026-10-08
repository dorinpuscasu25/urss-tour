import { Carousel } from "./Carousel";

const reviews = [{ quote: "Am venit pentru mașină. Am plecat înțelegând un oraș întreg.", text: "Turul nu s-a simțit ca o lecție, ci ca o după-amiază cu un prieten care știe fiecare colț. Cele trei ore au trecut fără să le simțim.", author: "Marc & Alice", location: "Lyon, Franța", experience: "Chișinău retro" }];

export function Reviews() {
  return <section className="section reviews-section" id="recenzii"><div className="shell"><span className="kicker">Din experiența călătorilor</span><div className="section-heading"><h2>Povești de după drum.</h2><p>Impresii de la cei care au călătorit cu noi.</p></div><Carousel label="Recenzii">{reviews.map(review => <article className="review-card" key={review.author}><span className="review-experience">{review.experience}</span><blockquote>„{review.quote}”</blockquote><p>{review.text}</p><div className="review-author"><strong>{review.author}</strong><span>{review.location}</span></div></article>)}</Carousel></div></section>;
}
