import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const MAX_BODY_SIZE = 20_000;

const LIMITS = {
  name: 100,
  business: 120,
  email: 254,
  phone: 40,
  service: 100,
  package: 100,
  budget: 100,
  timeline: 100,
  message: 3000,
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const contentType = request.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 415 }
      );
    }

    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    // Honeypot. Real visitors should never fill this field.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = cleanText(body.name, LIMITS.name);
    const business = cleanText(body.business, LIMITS.business);
    const email = cleanText(body.email, LIMITS.email).toLowerCase();
    const phone = cleanText(body.phone, LIMITS.phone);
    const service = cleanText(body.service, LIMITS.service);
    const selectedPackage = cleanText(body.package, LIMITS.package);
    const budget = cleanText(body.budget, LIMITS.budget);
    const timeline = cleanText(body.timeline, LIMITS.timeline);
    const message = cleanText(body.message, LIMITS.message);

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeBusiness = escapeHtml(business);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safePackage = escapeHtml(selectedPackage);
    const safeBudget = escapeHtml(budget);
    const safeTimeline = escapeHtml(timeline);
    const safeMessage = escapeHtml(message);

    const subjectName = (business || name)
      .replace(/[\r\n]/g, " ")
      .slice(0, 120);

    const { data, error } = await resend.emails.send({
      from: "Guaman Digital <onboarding@resend.dev>",
      to: ["andygamers2005@gmail.com"],
      replyTo: email,
      subject: `New Project Request — ${subjectName}`,

      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 680px; margin: 0 auto; background: #ffffff; color: #111111; padding: 32px; border-radius: 12px;">

          <div style="margin-bottom: 28px;">
            <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #2563eb;">
              Guaman Digital
            </p>

            <h1 style="margin: 0; font-size: 28px; line-height: 1.2;">
              New Project Request
            </h1>

            <p style="margin: 10px 0 0; color: #666666; font-size: 14px; line-height: 1.6;">
              A new potential client submitted the project form on your website.
            </p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 18px; font-size: 17px;">
              Client Information
            </h2>

            <p style="margin: 8px 0;">
              <strong>Name:</strong> ${safeName}
            </p>

            <p style="margin: 8px 0;">
              <strong>Business:</strong> ${safeBusiness || "Not provided"}
            </p>

            <p style="margin: 8px 0;">
              <strong>Email:</strong> ${safeEmail}
            </p>

            <p style="margin: 8px 0;">
              <strong>Phone:</strong> ${safePhone || "Not provided"}
            </p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 18px; font-size: 17px;">
              Project Information
            </h2>

            <p style="margin: 8px 0;">
              <strong>Service:</strong> ${safeService}
            </p>

            <p style="margin: 8px 0;">
              <strong>Website Package:</strong> ${
                safePackage || "Not selected"
              }
            </p>

            <p style="margin: 8px 0;">
              <strong>Estimated Budget:</strong> ${
                safeBudget || "Not provided"
              }
            </p>

            <p style="margin: 8px 0;">
              <strong>Timeline:</strong> ${safeTimeline || "Not provided"}
            </p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px;">
            <h2 style="margin: 0 0 14px; font-size: 17px;">
              Project Details
            </h2>

            <p style="margin: 0; color: #444444; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="margin: 24px 0 0; font-size: 12px; color: #888888; line-height: 1.5;">
            Reply directly to this email to contact ${safeName}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send project request." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}