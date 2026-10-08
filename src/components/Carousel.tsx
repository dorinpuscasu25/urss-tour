"use client";

import { Children, ReactNode, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);
  function go(index: number) {
    const element = track.current?.children[index] as HTMLElement | undefined;
    if (element && track.current) track.current.scrollTo({ left: element.offsetLeft - (track.current.children[0] as HTMLElement).offsetLeft, behavior: "smooth" });
  }
  return <div className="carousel" role="region" aria-label={label} aria-roledescription="carusel">
    <div className="carousel-track" ref={track} onScroll={() => {
      if (!track.current) return;
      const first = (track.current.children[0] as HTMLElement)?.offsetLeft || 0;
      const positions = Array.from(track.current.children).map(child => Math.abs((child as HTMLElement).offsetLeft - first - track.current!.scrollLeft));
      setActive(positions.indexOf(Math.min(...positions)));
    }}>{Children.map(children, (child, index) => <div className="carousel-slide" role="group" aria-label={`${index + 1} din ${count}`}>{child}</div>)}</div>
    <div className="carousel-controls"><button type="button" aria-label={`${label}: precedent`} disabled={active === 0} onClick={() => go(active - 1)}><ArrowLeft /></button><span aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span><button type="button" aria-label={`${label}: următor`} disabled={active === count - 1} onClick={() => go(active + 1)}><ArrowRight /></button></div>
  </div>;
}
