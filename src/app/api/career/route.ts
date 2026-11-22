import { NextResponse } from "next/server";

const RECIPIENT = process.env.INQUIRY_TO_EMAIL || "coo.jmanapul@trivalleyhh.com";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const resumeFile = formData.get("resume");

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Please complete all required application fields." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: string }[] = [];
    if (resumeFile && resumeFile instanceof File && resumeFile.size > 0) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Resume file must be under 5 MB." },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name || "resume.pdf",
        content: buffer.toString("base64"),
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Tri-Valley Careers <onboarding@resend.dev>";

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
          subject: `[Tri-Valley Career Application] ${position} — ${firstName} ${lastName}`,
          text: [
            `New Career Application from Tri-Valley Website`,
            `----------------------------------------------`,
            `Position: ${position}`,
            `Applicant: ${firstName} ${lastName}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Resume Attached: ${attachments[0]?.filename || "None"}`,
            ``,
            `Notes / Licensure:`,
            message || "None provided",
          ].join("\n"),
          ...(attachments.length > 0 ? { attachments } : {}),
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend career error:", errText);
        return NextResponse.json(
          { error: "Email delivery failed. Please call (209) 957-0708." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        delivered: true,
        note: `Your application for ${position} has been delivered to ${RECIPIENT}.`,
      });
    }

    console.info("[Career Application Logged - Configure RESEND_API_KEY to email]", {
      to: RECIPIENT,
      position,
      applicant: `${firstName} ${lastName}`,
      email,
      phone,
      attachment: attachments[0]?.filename || null,
    });

    return NextResponse.json({
      ok: true,
      delivered: false,
      note: `Application recorded. To activate live email delivery to ${RECIPIENT}, add RESEND_API_KEY to your environment variables.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process application." },
      { status: 400 }
    );
  }
}
