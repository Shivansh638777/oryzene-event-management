import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return <footer className="border-t border-[#28282e] bg-[#0a0a0d]">
    <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
      <div><Link href="/" className="display-font flex items-center gap-3 text-2xl font-bold"><Image src="/logo.png" alt="Oryzene Event Management logo" width={36} height={36} className="h-9 w-9 rounded-xl object-contain" />ORYZENE<span className="text-[#ff6a1f]">.</span></Link><p className="mt-4 max-w-sm text-sm leading-7 text-[#9a9aa4]">Event management with a local point of view. From first moodboard to final goodbye, we make the moving parts feel easy.</p></div>
      <div><p className="eyebrow">Explore</p><div className="mt-4 flex flex-col gap-3 text-sm text-[#9a9aa4]"><Link href="/services" className="hover:text-[#f4f3ef]">Services</Link><Link href="/about" className="hover:text-[#f4f3ef]">Our story</Link><Link href="/contact" className="hover:text-[#f4f3ef]">Start a conversation</Link></div></div>
      <div><p className="eyebrow">On the ground</p><p className="mt-4 text-sm leading-7 text-[#9a9aa4]">Kanpur · Lucknow · Gorakhpur<br />Uttar Pradesh, India</p><a href="mailto:oryzeneesports@gmail.com" className="mt-3 inline-block text-sm text-[#f2b542]">oryzeneesports@gmail.com</a></div>
    </div>
    <div className="container-shell flex flex-col gap-2 border-t border-[#28282e] py-5 text-xs text-[#9a9aa4] sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Oryzene Event Management</span><span>Built for good gatherings.</span></div>
  </footer>;
}
