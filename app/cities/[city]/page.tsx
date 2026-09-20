import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { cityProfiles } from "@/lib/cities";
import { siteUrl } from "@/lib/site";

type Props = { params: { city: string } };

export function generateStaticParams() { return Object.keys(cityProfiles).map((city) => ({ city })); }

export function generateMetadata({ params }: Props): Metadata {
  const city = cityProfiles[params.city];
  if (!city) return {};
  return { title: `Event Management Company in ${city.name}`, description: city.description, openGraph: { title: `Event Management Company in ${city.name}`, description: city.description, url: `${siteUrl}/cities/${city.slug}` }, twitter: { card: "summary_large_image", title: `Event Management Company in ${city.name}`, description: city.description } };
}

export default function CityPage({ params }: Props) {
  const city = cityProfiles[params.city];
  if (!city) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "LocalBusiness", name: `Oryzene Event Management - ${city.name}`, description: city.description, url: `${siteUrl}/cities/${city.slug}`, telephone: "+91 98765 43210", areaServed: city.name, address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: "Uttar Pradesh", addressCountry: "IN" }, geo: { "@type": "GeoCoordinates", latitude: city.latitude, longitude: city.longitude } };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Hero eyebrow={`${city.name} · Uttar Pradesh`} title={`Events that feel at home in ${city.name}.`} description={city.description} /><article className="container-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">The local brief</p><h2 className="section-title mt-4">A plan with<br />place in it.</h2></div><div className="space-y-7">{city.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 30)} className="text-base leading-8 text-[#9a9aa4]">{paragraph}</p>)}</div></article><section className="border-t border-[#28282e] bg-[#16161a]"><div className="container-shell grid gap-8 py-16 sm:grid-cols-3 sm:py-20"><div><p className="eyebrow">01</p><h3 className="display-font mt-3 text-2xl font-bold">Local venues</h3><p className="mt-2 text-sm leading-7 text-[#9a9aa4]">Planning shaped around the character, access and practical rhythm of {city.name} spaces.</p></div><div><p className="eyebrow">02</p><h3 className="display-font mt-3 text-2xl font-bold">Trusted people</h3><p className="mt-2 text-sm leading-7 text-[#9a9aa4]">A dependable local vendor network, coordinated by one accountable team.</p></div><div><p className="eyebrow">03</p><h3 className="display-font mt-3 text-2xl font-bold">Clear next steps</h3><p className="mt-2 text-sm leading-7 text-[#9a9aa4]">A useful conversation about your date, guest list, budget and the feeling you want.</p></div></div></section></main>;
}
