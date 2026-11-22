import { NextResponse } from "next/server";

const RECIPIENT = process.env.INQUIRY_TO_EMAIL || "coo.jmanapul@trivalleyhh.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "General Care Inquiry").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Tri-Valley Website <onboarding@resend.dev>";

    if (apiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [RECIPIENT],
          reply_to: email,
          subject: `[Tri-Valley Care Inquiry] ${service} — ${name}`,
          text: [
            `New Care Inquiry from Tri-Valley Website`,
            `----------------------------------------`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "Not provided"}`,
            `Service: ${service}`,
            ``,
            `Message:`,
            message,
          ].join("\n"),
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend error:", errText);
        return NextResponse.json(
          { error: "Email delivery failed. Please call (209) 957-0708." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        delivered: true,
        note: `Your message has been delivered to our Stockton intake team (${RECIPIENT}).`,
      });
    }

    // Fallback when RESEND_API_KEY is not yet configured in environment variables
    console.info("[Inquiry Logged - Configure RESEND_API_KEY to email]", {
      to: RECIPIENT,
      name,
      email,
      phone,
      service,
    });

    return NextResponse.json({
      ok: true,
      delivered: false,
      note: `Inquiry recorded. To activate live email delivery to ${RECIPIENT}, add RESEND_API_KEY to your environment variables.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
