"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.phone || !data.eventType || !data.city || !data.message) { setStatus("Please fill in every field so we can respond thoughtfully."); return; }
    setStatus("Sending your note...");
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setStatus(response.ok ? "Thank you. We will be in touch shortly." : "Something went wrong. Please email oryzeneesports@gmail.com directly.");
    if (response.ok) form.reset();
  }
  return <form onSubmit={submit} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2"><label>Name<input name="name" type="text" placeholder="Your name" /></label><label>Email<input name="email" type="email" placeholder="you@example.com" /></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label>Phone<input name="phone" type="tel" placeholder="+91 98765 43210" /></label><label>Event type<select name="eventType" defaultValue=""><option value="" disabled>Select an event</option><option>Wedding</option><option>Corporate event</option><option>Birthday or personal celebration</option><option>Esports or gaming event</option><option>Concert or live show</option></select></label></div>
    <label>City<select name="city" defaultValue=""><option value="" disabled>Choose a city</option><option>Kanpur</option><option>Lucknow</option><option>Gorakhpur</option><option>Other Uttar Pradesh city</option></select></label>
    <label>Tell us a little about it<textarea name="message" rows={5} placeholder="Date, guest count, venue ideas, and the feeling you want..."></textarea></label>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center"><button className="button-primary" type="submit">Send enquiry <span className="ml-3">↗</span></button>{status && <p role="status" className="text-sm text-[#9a9aa4]">{status}</p>}</div>
  </form>;
}
