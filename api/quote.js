const ADMIN_EMAIL = process.env.QUOTE_ADMIN_EMAIL || "triportagro@gmail.com";
const FROM_EMAIL = process.env.QUOTE_FROM_EMAIL || "no-reply@triportagro.com";

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function prettyLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase());
}

async function verifyRecaptcha(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY environment variable");
  }

  const payload = new URLSearchParams({
    secret,
    response: token,
    remoteip: remoteIp || ""
  });

  const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: payload
  });

  if (!verifyResponse.ok) {
    return false;
  }

  const verifyData = await verifyResponse.json();
  return Boolean(verifyData.success);
}

async function sendResendEmail({ to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: `Triport Agro <${FROM_EMAIL}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      reply_to: replyTo
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend request failed: ${body}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const rawBody = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const fields = rawBody.fields && typeof rawBody.fields === "object" ? rawBody.fields : {};
    const recaptchaToken = String(rawBody.recaptchaToken || "").trim();
    const source = String(rawBody.source || "").trim();

    const email = String(fields.email || "").trim();
    const firstName = String(fields.firstName || "").trim();
    const lastName = String(fields.lastName || "").trim();
    const fullName = `${firstName} ${lastName}`.trim() || "Website Visitor";

    if (!email || !recaptchaToken) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const remoteIp = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";
    const recaptchaPassed = await verifyRecaptcha(recaptchaToken, Array.isArray(remoteIp) ? remoteIp[0] : String(remoteIp));

    if (!recaptchaPassed) {
      return res.status(400).json({ message: "reCAPTCHA verification failed" });
    }

    const entries = Object.entries(fields)
      .filter(([, value]) => String(value || "").trim().length > 0)
      .map(([key, value]) => ({
        label: prettyLabel(key),
        value: escapeHtml(String(value))
      }));

    const adminRows = entries
      .map((entry) => `<tr><td style="padding:8px 12px;border:1px solid #d9e3d3;font-weight:600;background:#f7fbf4;">${entry.label}</td><td style="padding:8px 12px;border:1px solid #d9e3d3;">${entry.value}</td></tr>`)
      .join("");

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;color:#1f2a21;line-height:1.6;">
        <h2 style="margin:0 0 10px;">New Quotation Enquiry</h2>
        <p style="margin:0 0 16px;">A client submitted the quotation form on the website.</p>
        <table style="border-collapse:collapse;width:100%;max-width:760px;">${adminRows}</table>
        ${source ? `<p style="margin:16px 0 0;"><strong>Source:</strong> ${escapeHtml(source)}</p>` : ""}
      </div>
    `;

    const clientHtml = `
      <div style="font-family:Arial,sans-serif;color:#1f2a21;line-height:1.6;">
        <h2 style="margin:0 0 10px;">Thanks for contacting Triport Agro International Limited</h2>
        <p style="margin:0 0 14px;">Hello ${escapeHtml(fullName)},</p>
        <p style="margin:0 0 14px;">We have received your quotation enquiry. Our team will review your details and respond shortly.</p>
        <p style="margin:0;">Regards,<br/>Triport Agro International Limited</p>
      </div>
    `;

    await sendResendEmail({
      to: ADMIN_EMAIL,
      subject: `New enquiry from ${fullName}`,
      html: adminHtml,
      replyTo: email
    });

    await sendResendEmail({
      to: email,
      subject: "We received your enquiry - Triport Agro International Limited",
      html: clientHtml,
      replyTo: ADMIN_EMAIL
    });

    return res.status(200).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return res.status(500).json({ message });
  }
}
