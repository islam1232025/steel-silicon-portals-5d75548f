import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const OWNER_EMAIL = "islam.sk544@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string; // sender email (customer)
  subject: string;
  message: string;
}

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const clamp = (value: string, max: number) => value.trim().slice(0, max);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const body = (await req.json()) as Partial<ContactEmailRequest>;

    const name = clamp(String(body.name ?? ""), 100);
    const email = clamp(String(body.email ?? ""), 255);
    const subject = clamp(String(body.subject ?? ""), 150);
    const message = clamp(String(body.message ?? ""), 4000);

    if (!name) throw new Error("Name is required");
    if (!email || !isValidEmail(email)) throw new Error("Valid email is required");
    if (!subject) throw new Error("Subject is required");
    if (!message) throw new Error("Message is required");

    console.log("Contact submission received", { subject });

    // Send email using Resend API directly
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        reply_to: email,
        subject: `New Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              New Message from Portfolio
            </h1>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px;"><strong>From:</strong> ${name}</p>
              <p style="margin: 0 0 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">
              Reply-to will be set to the sender email above.
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
