"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["Services", "/services"],
  ["Cities", "/cities/kanpur"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#28282e] bg-[#0a0a0d]/95 backdrop-blur">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Link href="/" className="display-font flex items-center gap-2 text-xl font-bold tracking-wide" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Oryzene Event Management logo" width={38} height={38} className="h-9 w-9 rounded-xl object-contain" priority />
          <span>ORYZENE<span className="text-[#ff6a1f]">.</span></span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className="display-font text-sm font-bold uppercase tracking-wider text-[#9a9aa4] transition-colors hover:text-[#f4f3ef]">{label}</Link>)}
        </nav>
        <Link href="/contact" className="button-primary hidden px-4 py-2 text-sm md:inline-flex">Plan your event <span className="ml-2">↗</span></Link>
        <button type="button" className="rounded-xl border border-[#28282e] p-2 text-[#f4f3ef] md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-5 bg-current" /><span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && <nav className="border-t border-[#28282e] bg-[#16161a] px-5 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="container-shell flex flex-col gap-4 px-0">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="display-font text-lg font-bold uppercase tracking-wider text-[#f4f3ef]">{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button-primary mt-2">Plan your event <span className="ml-2">↗</span></Link></div>
      </nav>}
    </header>
  );
}
