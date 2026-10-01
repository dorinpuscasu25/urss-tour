import type { Metadata } from "next";
import { TourCatalog } from "@/components/TourCatalog";

export const metadata: Metadata = { title:"Expediții" };
export default function ExpeditionsPage(){return <><section className="page-hero" data-index="05"><div className="shell"><span className="kicker">Catalog de rute</span><h1>Unde începe următoarea poveste?</h1><p>De la câteva ore prin Chișinău la două zile pe drumuri secundare. Alege punctul de pornire; restul îl ajustăm împreună.</p></div></section><section className="section"><div className="shell"><TourCatalog /></div></section></>}
