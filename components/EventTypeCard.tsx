import Link from "next/link";

type EventTypeCardProps = { number: string; title: string; description: string; href?: string };

export function EventTypeCard({ number, title, description, href = "/services" }: EventTypeCardProps) {
  return <Link href={href} className="group hairline rounded-xl bg-[#16161a] p-6 transition-colors hover:border-[#ff6a1f] sm:p-7"><div className="flex items-start justify-between"><span className="display-font text-sm font-bold text-[#f2b542]">{number}</span><span className="text-[#9a9aa4] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div><h3 className="display-font mt-14 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#9a9aa4]">{description}</p></Link>;
}
