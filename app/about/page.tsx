import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Red Oak Tree PTY',
  description: 'Red Oak Tree PTY is an independent Australian digital products studio.',
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="text-sm tracking-[0.2em] uppercase mb-6 opacity-40" style={{ color: 'var(--bark)' }}>About</p>
        <h1 className="font-display mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--oak)', fontWeight: 300 }}>
          Built with<br /><em>care and conviction.</em>
        </h1>
        <p className="text-lg leading-relaxed opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
          Red Oak Tree PTY is an independent Australian digital products studio. We build software that helps people understand themselves and the people around them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-7 space-y-8">
          <div style={{ borderTop: '1px solid rgba(44,26,14,0.1)' }} className="pt-8">
            <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--oak)', fontWeight: 400 }}>What we do</h2>
            <p className="leading-relaxed opacity-70 mb-4" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              We design and build digital products that sit at the intersection of psychology, communication, and technology. Our work starts with a question: what would genuinely help people live and work better?
            </p>
            <p className="leading-relaxed opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              Our first product, Huetype, applies AI to the DISC personality framework — turning a 25-question assessment into a personalised, 2,500-word report that gives people real insight into how they think, communicate, and relate to others.
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(44,26,14,0.1)' }} className="pt-8">
            <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--oak)', fontWeight: 400 }}>How we operate</h2>
            <p className="leading-relaxed opacity-70 mb-4" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              We are an independent studio — no outside investors, no obligations to anyone but our users. That independence lets us make decisions based on what's right for the product, not what's right for a cap table.
            </p>
            <p className="leading-relaxed opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              We build in public where we can, iterate quickly, and keep our cost structure lean so we can focus on quality over growth-at-all-costs.
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(44,26,14,0.1)' }} className="pt-8">
            <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--oak)', fontWeight: 400 }}>Where we're based</h2>
            <p className="leading-relaxed opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              Red Oak Tree PTY is registered in Australia. Our products serve a global audience, with our primary market in Australia and the English-speaking world.
            </p>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div style={{ background: 'var(--parchment)', padding: '2rem' }}>
            <p className="text-xs tracking-[0.15em] uppercase mb-6 opacity-40" style={{ color: 'var(--bark)' }}>Studio details</p>
            {[
              { label: 'Founded', value: '2024' },
              { label: 'Location', value: 'Australia' },
              { label: 'Structure', value: 'Proprietary Limited (PTY)' },
              { label: 'Focus', value: 'Digital consumer products' },
              { label: 'Stage', value: 'Early — first product launching' },
            ].map(d => (
              <div key={d.label} className="flex justify-between py-3" style={{ borderBottom: '1px solid rgba(44,26,14,0.08)' }}>
                <p className="text-sm opacity-50" style={{ color: 'var(--bark)', fontWeight: 300 }}>{d.label}</p>
                <p className="text-sm" style={{ color: 'var(--oak)', fontWeight: 400 }}>{d.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
