import { NextResponse } from "next/server";
import * as z from "zod";

const contactApiSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
  bot_trap: z.string().optional(),
  sourceContext: z.string().optional(),
  timestamp: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactApiSchema.parse(body);

    // Honeypot check: If bot filled this field, return silent success without dispatching
    if (validatedData.bot_trap && validatedData.bot_trap.trim().length > 0) {
      console.warn("Spam bot trapped and ignored:", validatedData.email);
      return NextResponse.json({ success: true, message: "Inquiry registered" });
    }

    console.log("=== NEW INBOUND LEAD FOR EAGLE TECH ===");
    console.log(`From: ${validatedData.name} (${validatedData.email})`);
    console.log(`Phone: ${validatedData.phone}`);
    console.log(`Service: ${validatedData.service}`);
    console.log(`Budget: ${validatedData.budget}`);
    console.log(`Source: ${validatedData.sourceContext || "Website Contact Form"}`);
    console.log(`Message: ${validatedData.message}`);
    console.log("========================================");

    // If RESEND_API_KEY is configured in .env, attempt email sending
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "re_123456789") {
      try {
        const emailTo = process.env.CONTACT_NOTIFICATION_EMAIL || "contact@eagletech.in";
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Eagle Tech Inquiries <onboarding@resend.dev>",
            to: emailTo,
            subject: `New Lead: ${validatedData.name} - ${validatedData.service}`,
            text: `
Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Service: ${validatedData.service}
Budget: ${validatedData.budget}
Source: ${validatedData.sourceContext}

Message:
${validatedData.message}
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Resend delivery failed:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been routed to our Wilson Garden team.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input. Please check the required form fields.",
          details: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Server error while processing your inquiry. Please call us directly.",
      },
      { status: 500 }
    );
  }
}
