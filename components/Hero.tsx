import Link from "next/link";

type HeroProps = { eyebrow: string; title: string; description: string; action?: string; actionHref?: string };

export function Hero({ eyebrow, title, description, action = "Tell us about your event", actionHref = "/contact" }: HeroProps) {
  return <section className="hero-glow border-b border-[#28282e]">
    <div className="container-shell py-20 sm:py-28 lg:py-36"><p className="eyebrow">{eyebrow}</p><h1 className="display-font mt-5 max-w-4xl text-5xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-8 text-[#9a9aa4] sm:text-lg">{description}</p><Link href={actionHref} className="button-primary mt-9">{action}<span className="ml-3">↗</span></Link></div>
  </section>;
}
