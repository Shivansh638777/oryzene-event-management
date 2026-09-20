import Link from "next/link";

type CityCardProps = { name: string; region: string; detail: string; href: string };

export function CityCard({ name, region, detail, href }: CityCardProps) {
  return <Link href={href} className="group hairline flex min-h-48 flex-col justify-between rounded-xl bg-[#16161a] p-6 transition-colors hover:border-[#ff6a1f]"><div className="flex items-center justify-between"><span className="eyebrow">{region}</span><span className="text-[#9a9aa4] transition-transform group-hover:translate-x-1">↗</span></div><div><h3 className="display-font text-3xl font-bold">{name}</h3><p className="mt-2 text-sm text-[#9a9aa4]">{detail}</p></div></Link>;
}
