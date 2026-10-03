// Cloudflare Pages Function: POST /api/contact
// Receives contact-form submissions (JSON), verifies the Cloudflare Turnstile
// token, and forwards the enquiry by email via Resend.
//
// Required environment variables (set in Cloudflare Pages → Settings → Environment variables):
//   TURNSTILE_SECRET_KEY — Turnstile secret key (site key is PUBLIC_TURNSTILE_SITE_KEY at build time)
//   RESEND_API_KEY       — Resend API key for email delivery
//   CONTACT_EMAIL_TO     — destination inbox (e.g. info@mantissecurity.co.za)
//   CONTACT_EMAIL_FROM   — verified Resend sender (e.g. website@mantissecurity.co.za)

interface Env {
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

async function verifyTurnstile(token: string, ip: string | null, secret: string): Promise<boolean> {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const outcome = (await res.json()) as { success: boolean };
    return outcome.success === true;
  } catch {
    return false;
  }
}

const onSubmit: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  let data: Record<string, string>;
  try {
    data = (await request.json()) as Record<string, string>;
  } catch {
    return json({ ok: false, error: 'Invalid JSON body' }, 400);
  }

  const name = (data.name ?? '').trim();
  const email = (data.email ?? '').trim();
  const phone = (data.phone ?? '').trim();
  const company = (data.company ?? '').trim();
  const service = (data.service ?? '').trim();
  const formType = (data.formType ?? 'contact').trim();
  const message = (data.message ?? '').trim();

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Name, email and message are required' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Invalid email address' }, 400);
  }

  // Turnstile verification (skipped only when no secret is configured, e.g. local dev)
  if (env.TURNSTILE_SECRET_KEY) {
    const token = data.turnstileToken ?? '';
    if (!token) {
      return json({ ok: false, error: 'Missing captcha token' }, 400);
    }
    const ip = request.headers.get('CF-Connecting-IP');
    const ok = await verifyTurnstile(token, ip, env.TURNSTILE_SECRET_KEY);
    if (!ok) {
      return json({ ok: false, error: 'Captcha verification failed' }, 403);
    }
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_TO) {
    console.error('contact: RESEND_API_KEY or CONTACT_EMAIL_TO not configured');
    return json({ ok: false, error: 'Email delivery is not configured' }, 500);
  }

  const subject =
    formType === 'assessment'
      ? `Security Assessment Request — ${name}`
      : formType === 'quote'
        ? `Quote Request — ${name}`
        : `Website Enquiry — ${name}`;

  const html = `
    <h2 style="font-family:sans-serif">New website enquiry</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Phone</strong></td><td>${escapeHtml(phone) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Company</strong></td><td>${escapeHtml(company) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Service</strong></td><td>${escapeHtml(service) || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Form type</strong></td><td>${escapeHtml(formType)}</td></tr>
    </table>
    <h3 style="font-family:sans-serif">Message</h3>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-line">${escapeHtml(message)}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_EMAIL_FROM || 'Mantis Security Website <onboarding@resend.dev>',
      to: [env.CONTACT_EMAIL_TO],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    console.error('contact: Resend delivery failed', await res.text());
    return json({ ok: false, error: 'Failed to send message' }, 500);
  }

  return json({ ok: true });
};

export const onRequest = onSubmit;
