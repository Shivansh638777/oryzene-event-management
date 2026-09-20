import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["name", "email", "phone", "eventType", "city", "message"];
    if (required.some((field) => !body[field])) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || "oryzeneesports@gmail.com";
    const sender = process.env.RESEND_FROM_EMAIL || "Oryzene Website <onboarding@resend.dev>";
    if (!apiKey) return NextResponse.json({ error: "Email service is not configured. Add RESEND_API_KEY in your environment variables." }, { status: 503 });
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: sender, to: [recipient], subject: `New ${body.eventType} enquiry from ${body.name}`, reply_to: body.email, text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nCity: ${body.city}\nEvent type: ${body.eventType}\n\n${body.message}` }) });
    if (!response.ok) {
      const error = await response.text();
      console.error("Resend email failed:", error);
      return NextResponse.json({ error: "Unable to send your enquiry right now. Please email oryzeneesports@gmail.com directly." }, { status: 502 });
    }
    return NextResponse.json({ received: true });
  } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
}
