import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourExperience } from "@/components/TourExperience";
import { tourBySlug, tours } from "@/data/tours";

export function generateStaticParams(){return tours.map(t=>({slug:t.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const tour=tourBySlug(slug);return tour?{title:tour.title,description:tour.summary}:{title:"Expediție"}}
export default async function TourPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const tour=tourBySlug(slug);if(!tour)notFound();return <TourExperience tour={tour}/>}
