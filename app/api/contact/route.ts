import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const {
      name,
      business,
      email,
      phone,
      service,
      budget,
      timeline,
      message,
    } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Guaman Digital <onboarding@resend.dev>",
      to: ["andygamers2005@gmail.com"],
      replyTo: email,
      subject: `New Project Request — ${business || name}`,

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
              <strong>Name:</strong> ${name}
            </p>

            <p style="margin: 8px 0;">
              <strong>Business:</strong> ${business || "Not provided"}
            </p>

            <p style="margin: 8px 0;">
              <strong>Email:</strong> ${email}
            </p>

            <p style="margin: 8px 0;">
              <strong>Phone:</strong> ${phone || "Not provided"}
            </p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 18px; font-size: 17px;">
              Project Information
            </h2>

            <p style="margin: 8px 0;">
              <strong>Service:</strong> ${service}
            </p>

            <p style="margin: 8px 0;">
              <strong>Estimated Budget:</strong> ${budget || "Not provided"}
            </p>

            <p style="margin: 8px 0;">
              <strong>Timeline:</strong> ${timeline || "Not provided"}
            </p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px;">
            <h2 style="margin: 0 0 14px; font-size: 17px;">
              Project Details
            </h2>

            <p style="margin: 0; color: #444444; line-height: 1.7; white-space: pre-wrap;">
              ${message}
            </p>
          </div>

          <p style="margin: 24px 0 0; font-size: 12px; color: #888888; line-height: 1.5;">
            Reply directly to this email to contact ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send project request.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}