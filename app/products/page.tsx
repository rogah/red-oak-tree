import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — Red Oak Tree PTY',
  description: 'Digital products built by Red Oak Tree PTY.',
}

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-xl mb-20">
        <p className="text-sm tracking-[0.2em] uppercase mb-6 opacity-40" style={{ color: 'var(--bark)' }}>Our work</p>
        <h1 className="font-display mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--oak)', fontWeight: 300 }}>
          Products that<br /><em>earn their place.</em>
        </h1>
        <p className="text-lg leading-relaxed opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
          We build focused tools that do one thing exceptionally well. No bloat, no feature creep — just software that delivers genuine value.
        </p>
      </div>

      {/* Huetype */}
      <div style={{ borderTop: '1px solid rgba(44,26,14,0.1)' }} className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            {/* Color bar */}
            <div className="flex gap-1.5 mb-8" style={{ height: 4 }}>
              {[
                { c: '#C0392B', flex: 4 },
                { c: '#F39C12', flex: 1 },
                { c: '#27AE60', flex: 3 },
                { c: '#2980B9', flex: 2 },
              ].map((b, i) => (
                <div key={i} style={{ background: b.c, flex: b.flex, borderRadius: 2 }} />
              ))}
            </div>

            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--oak)', fontWeight: 300 }}>Huetype</h2>
              <span className="text-xs tracking-wider uppercase px-2 py-1" style={{ background: 'var(--moss)', color: 'white', fontWeight: 400 }}>Live</span>
            </div>

            <p className="text-lg leading-relaxed mb-6 opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              AI-powered personality color assessment. Users take a free 25-question quiz across five life contexts and receive a personalised 2,500-word report that reveals how they think, communicate, and relate to others — based on the DISC color framework.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Framework', value: 'DISC Color (Red / Yellow / Green / Blue)' },
                { label: 'Report length', value: '~2,500 words across 7 sections' },
                { label: 'Delivery', value: 'Web + PDF via email' },
                { label: 'Price', value: '$12 AUD one-time' },
              ].map(d => (
                <div key={d.label} className="p-4" style={{ background: 'var(--parchment)' }}>
                  <p className="text-xs opacity-40 mb-1 uppercase tracking-wider" style={{ color: 'var(--bark)' }}>{d.label}</p>
                  <p className="text-sm" style={{ color: 'var(--oak)', fontWeight: 400 }}>{d.value}</p>
                </div>
              ))}
            </div>

            <a href="https://huetype.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wide transition-all hover:opacity-80" style={{ background: 'var(--oak)', color: 'var(--cream)', fontWeight: 400 }}>
              Visit huetype.com →
            </a>
          </div>

          <div className="md:col-span-5">
            <div style={{ background: 'var(--parchment)', padding: '2rem' }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-5 opacity-40" style={{ color: 'var(--bark)' }}>Report sections</p>
              {[
                'Your Color Profile',
                'How You Think',
                'How Others See You',
                'Your Communication Blind Spots',
                'Working With Each Color',
                'Your Conflict Pattern',
                'Your Ideal Environment',
              ].map((s, i) => (
                <div key={s} className="flex items-center gap-3 py-2.5" style={{ borderBottom: '1px solid rgba(44,26,14,0.07)' }}>
                  <span className="text-xs opacity-30 w-4 text-right" style={{ color: 'var(--bark)', fontFamily: 'monospace' }}>0{i+1}</span>
                  <p className="text-sm" style={{ color: 'var(--oak)', fontWeight: 300 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Future products teaser */}
      <div style={{ borderTop: '1px solid rgba(44,26,14,0.1)' }} className="pt-16">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-display text-3xl opacity-30" style={{ color: 'var(--oak)', fontWeight: 300 }}>Coming next</h2>
          <span className="text-xs tracking-wider uppercase px-2 py-1" style={{ border: '1px solid rgba(44,26,14,0.15)', color: 'var(--bark)' }}>{new Date().getFullYear()}</span>
        </div>
        <p className="opacity-40 max-w-xl" style={{ color: 'var(--bark)', fontWeight: 300 }}>
          Duo compatibility reports and team assessment packs are in development. If you're interested in early access or enterprise licensing, get in touch.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-sm opacity-50 hover:opacity-80 transition-opacity" style={{ color: 'var(--bark)', fontWeight: 400 }}>
          Contact us about partnerships →
        </Link>
      </div>
    </div>
  )
}
