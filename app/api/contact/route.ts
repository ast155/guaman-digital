import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      business,
      email,
      phone,
      service,
      budget,
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

      // CAMBIA ESTE EMAIL POR TU EMAIL REAL
      to: ["andygamers2005@gmail.com"],

      replyTo: email,

      subject: `New Project Request — ${business || name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
          <h1>New Guaman Digital Project Request</h1>

          <hr />

          <h3>Client Information</h3>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Business:</strong>
            ${business || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <hr />

          <h3>Project Information</h3>

          <p>
            <strong>Service:</strong>
            ${service}
          </p>

          <p>
            <strong>Budget:</strong>
            ${budget || "Not provided"}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
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