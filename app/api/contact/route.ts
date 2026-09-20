import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["name", "email", "phone", "eventType", "city", "message"];
    if (required.some((field) => !body[field])) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || "founder@oryzene.com";
    if (!apiKey) return NextResponse.json({ received: true, message: "Email provider is not configured yet." });
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: "Oryzene Website <onboarding@resend.dev>", to: [recipient], subject: `New ${body.eventType} enquiry from ${body.name}`, reply_to: body.email, text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nCity: ${body.city}\nEvent type: ${body.eventType}\n\n${body.message}` }) });
    if (!response.ok) return NextResponse.json({ error: "Unable to send" }, { status: 502 });
    return NextResponse.json({ received: true });
  } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
}
