import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, UsersThree } from "@phosphor-icons/react/dist/ssr";
import type { Tour } from "@/data/tours";

export function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  return (
    <article className="tour-card">
      <Link href={`/travel/${tour.slug}`} className="tour-image">
        <Image src={tour.hero} alt={tour.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
        <span className="tour-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="tour-label">{tour.label}</span>
      </Link>
      <div className="tour-card-body">
        <div className="tour-meta"><span><MapPin /> {tour.location}</span><span><Clock /> {tour.duration}</span><span><UsersThree /> {tour.group}</span></div>
        <h3><Link href={`/travel/${tour.slug}`}>{tour.title}</Link></h3>
        <p>{tour.summary}</p>
        <div className="tour-card-foot"><span>de la <strong>€{tour.price}</strong> <small>/ grup</small></span><Link className="circle-link" href={`/travel/${tour.slug}`} aria-label={`Vezi ${tour.title}`}><ArrowUpRight /></Link></div>
      </div>
    </article>
  );
}
