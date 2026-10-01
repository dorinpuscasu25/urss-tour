"use client";
import { useState } from "react";
import { TourCard } from "./TourCard";
import { tours } from "@/data/tours";

const filters = ["Toate", "Urban", "Istorie", "Transfer", "Drum lung"];
export function TourCatalog() {
  const [filter,setFilter] = useState("Toate");
  const shown = filter === "Toate" ? tours : tours.filter(t=>t.category===filter);
  return <><div className="filter-bar" role="group" aria-label="Filtrează expedițiile">{filters.map(item=><button key={item} className={item===filter?"active":""} onClick={()=>setFilter(item)}>{item} <span>({item==="Toate"?tours.length:tours.filter(t=>t.category===item).length})</span></button>)}</div><div className="tour-grid">{shown.map((tour,index)=><TourCard key={tour.slug} tour={tour} index={tours.indexOf(tour)} />)}</div></>;
}
