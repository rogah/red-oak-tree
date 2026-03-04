import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Red Oak Tree PTY',
  description: 'Privacy policy for Red Oak Tree PTY and its products.',
}

const LAST_UPDATED = 'January 2025'

export default function Privacy() {
  const sections = [
    {
      title: '1. Who we are',
      body: `Red Oak Tree PTY ("we", "us", "our") is an Australian company registered under Australian law. We operate digital products including Huetype (huetype.com). Our contact email for privacy matters is privacy@redoaktree.com.au.`,
    },
    {
      title: '2. What information we collect',
      body: `When you use our products, we may collect:
      
• Quiz responses you submit (used solely to generate your personality report)
• Your email address, provided at the point of purchase
• Payment information — processed entirely by Stripe; we never see or store your card details
• Basic usage data (pages visited, time on site) via PostHog analytics
• Technical information (browser type, device type) for performance monitoring

We do not collect your name unless you voluntarily provide it. We do not require account creation.`,
    },
    {
      title: '3. How we use your information',
      body: `We use the information we collect to:

• Generate and deliver your personality report
• Send your PDF report to the email address you provided
• Process your payment via Stripe
• Improve our products through aggregated, anonymised usage data
• Respond to support or privacy enquiries

We do not sell your personal information to any third party. We do not use your data for advertising.`,
    },
    {
      title: '4. Data storage and security',
      body: `Your quiz responses, scores, and report content are stored in Supabase (hosted on AWS infrastructure). Payments are processed by Stripe, which is PCI-DSS compliant. We use industry-standard encryption (HTTPS/TLS) for all data in transit.

We retain your session data and report indefinitely so that you can access your report via a permanent link. You may request deletion at any time by contacting privacy@redoaktree.com.au.`,
    },
    {
      title: '5. Third-party services',
      body: `We use the following third-party services to operate our products:

• Stripe — payment processing (stripe.com/privacy)
• Supabase — database and storage (supabase.com/privacy)
• Anthropic — AI report generation (anthropic.com/privacy)
• Resend — transactional email delivery (resend.com/privacy)
• PostHog — product analytics (posthog.com/privacy)
• Vercel — hosting (vercel.com/legal/privacy-policy)

Each service operates under its own privacy policy. We share only the minimum data necessary with each provider.`,
    },
    {
      title: '6. Your rights',
      body: `Under Australian Privacy Law (Privacy Act 1988) and, where applicable, the GDPR, you have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Withdraw consent where processing is based on consent

To exercise any of these rights, contact us at privacy@redoaktree.com.au. We will respond within 30 days.`,
    },
    {
      title: '7. Cookies',
      body: `We use minimal cookies necessary for the product to function (session identifiers and payment flow state). We do not use advertising cookies or third-party tracking cookies. You can disable cookies in your browser settings, though this may affect product functionality.`,
    },
    {
      title: '8. Children',
      body: `Our products are intended for users aged 16 and over. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
    },
    {
      title: '9. Changes to this policy',
      body: `We may update this Privacy Policy from time to time. When we do, we will update the "last updated" date at the top of this page. Continued use of our products following any changes constitutes acceptance of the updated policy.`,
    },
    {
      title: '10. Contact',
      body: `For any privacy-related questions or requests, contact us at:
      
privacy@redoaktree.com.au
Red Oak Tree PTY, Australia`,
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-sm tracking-[0.2em] uppercase mb-6 opacity-40" style={{ color: 'var(--bark)' }}>Legal</p>
        <h1 className="font-display mb-4 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--oak)', fontWeight: 300 }}>
          Privacy Policy
        </h1>
        <p className="text-sm opacity-40" style={{ color: 'var(--bark)' }}>Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="space-y-10">
        {sections.map(s => (
          <div key={s.title} style={{ borderTop: '1px solid rgba(44,26,14,0.08)' }} className="pt-8">
            <h2 className="font-display text-xl mb-4" style={{ color: 'var(--oak)', fontWeight: 400 }}>{s.title}</h2>
            <div className="text-sm leading-relaxed opacity-70 whitespace-pre-line" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
