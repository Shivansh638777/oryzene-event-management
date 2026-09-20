export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916387772010";
  return <a href={`https://wa.me/${number}`} target="_blank" rel="noreferrer" aria-label="Chat with Oryzene on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-xl font-bold text-[#0a0a0d] shadow-[0_0_0_5px_rgba(37,211,102,0.12)] transition-transform hover:scale-105">⌁</a>;
}
