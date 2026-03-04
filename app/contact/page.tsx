import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Red Oak Tree PTY',
  description: 'Get in touch with Red Oak Tree PTY.',
}

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-xl mb-16">
        <p className="text-sm tracking-[0.2em] uppercase mb-6 opacity-40" style={{ color: 'var(--bark)' }}>Contact</p>
        <h1 className="font-display mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--oak)', fontWeight: 300 }}>
          Let's talk<em>.</em>
        </h1>
        <p className="text-lg leading-relaxed opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
          Whether it's a question about our products, a partnership enquiry, or a press request — we'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-6 space-y-8">
          {[
            {
              title: 'General enquiries',
              email: 'hello@redoaktree.com.au',
              desc: 'Questions about our company, products, or potential partnerships.',
            },
            {
              title: 'Privacy & data',
              email: 'privacy@redoaktree.com.au',
              desc: 'Data requests, privacy concerns, or questions about how we handle your information.',
            },
            {
              title: 'Huetype support',
              email: 'support@huetype.com',
              desc: 'Questions about your Huetype assessment, report, or payment.',
            },
          ].map(c => (
            <div key={c.title} style={{ borderTop: '1px solid rgba(44,26,14,0.1)' }} className="pt-6">
              <h2 className="font-display text-xl mb-2" style={{ color: 'var(--oak)', fontWeight: 400 }}>{c.title}</h2>
              <p className="text-sm opacity-50 mb-3 leading-relaxed" style={{ color: 'var(--bark)', fontWeight: 300 }}>{c.desc}</p>
              <a href={`mailto:${c.email}`} className="text-sm hover:opacity-60 transition-opacity" style={{ color: 'var(--moss)', fontWeight: 400 }}>
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div style={{ background: 'var(--parchment)', padding: '2rem' }}>
            <p className="text-xs tracking-[0.15em] uppercase mb-6 opacity-40" style={{ color: 'var(--bark)' }}>Response times</p>
            {[
              { type: 'General', time: 'Within 2 business days' },
              { type: 'Support', time: 'Within 24 hours' },
              { type: 'Privacy requests', time: 'Within 30 days (as required by law)' },
            ].map(r => (
              <div key={r.type} className="py-3 flex justify-between" style={{ borderBottom: '1px solid rgba(44,26,14,0.07)' }}>
                <p className="text-sm opacity-50" style={{ color: 'var(--bark)', fontWeight: 300 }}>{r.type}</p>
                <p className="text-sm" style={{ color: 'var(--oak)', fontWeight: 400 }}>{r.time}</p>
              </div>
            ))}
            <p className="text-xs mt-6 opacity-40 leading-relaxed" style={{ color: 'var(--bark)' }}>
              Red Oak Tree PTY is based in Australia. All times are AEDT.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
