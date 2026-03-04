import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="animate-fade-up delay-100 text-sm tracking-[0.2em] uppercase mb-8" style={{ color: 'var(--moss)', fontWeight: 400 }}>
            Digital Products Studio · Australia
          </p>
          <h1 className="animate-fade-up delay-200 font-display leading-[1.1] mb-8" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--oak)', fontWeight: 300 }}>
            Software built<br />
            <em>for human insight.</em>
          </h1>
          <p className="animate-fade-up delay-300 text-lg leading-relaxed max-w-xl mb-12 opacity-70" style={{ color: 'var(--bark)', fontWeight: 300 }}>
            Red Oak Tree builds thoughtful digital products that help people understand themselves and communicate more clearly. We make things that matter.
          </p>
          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wide transition-all hover:opacity-90" style={{ background: 'var(--oak)', color: 'var(--cream)', fontWeight: 400 }}>
              View our work →
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wide transition-all hover:opacity-70" style={{ border: '1px solid rgba(44,26,14,0.2)', color: 'var(--bark)' }}>
              About the studio
            </Link>
          </div>
        </div>

        {/* Decorative ring */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden xl:block pointer-events-none" style={{ width: 480, height: 480, border: '1px solid rgba(44,26,14,0.06)', borderRadius: '50%' }}>
          <div className="absolute inset-8" style={{ border: '1px solid rgba(44,26,14,0.04)', borderRadius: '50%' }} />
          <div className="absolute inset-16" style={{ border: '1px solid rgba(44,26,14,0.04)', borderRadius: '50%' }} />
        </div>
      </section>

      {/* Values strip */}
      <section style={{ background: 'var(--oak)', color: 'var(--cream)' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { n: '01', title: 'Purposeful', body: 'We build products that solve real problems for real people — nothing speculative, nothing trivial.' },
            { n: '02', title: 'Human-first', body: 'Technology should serve people, not the other way around. Every decision starts with the person using it.' },
            { n: '03', title: 'Independent', body: 'No outside funding, no compromises. We build what we believe in, on our own terms.' },
          ].map(v => (
            <div key={v.n}>
              <p className="text-xs tracking-[0.2em] uppercase mb-4 opacity-40">{v.n}</p>
              <h3 className="font-display text-2xl mb-3" style={{ fontWeight: 400 }}>{v.title}</h3>
              <p className="text-sm leading-relaxed opacity-60" style={{ fontWeight: 300 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured product */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm tracking-[0.15em] uppercase mb-12 opacity-40" style={{ color: 'var(--bark)' }}>Current product</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Color bars visual */}
            <div className="flex gap-2 mb-8" style={{ height: 6 }}>
              {['#C0392B','#F39C12','#27AE60','#2980B9'].map((c, i) => (
                <div key={i} style={{ background: c, flex: i === 0 ? 4 : i === 1 ? 1 : i === 2 ? 3 : 2, borderRadius: 3 }} />
              ))}
            </div>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--oak)', fontWeight: 300, lineHeight: 1.15 }}>Huetype</h2>
            <p className="text-lg mb-6 opacity-70 leading-relaxed" style={{ color: 'var(--bark)', fontWeight: 300 }}>
              An AI-powered personality color assessment that generates personalised 2,500-word reports using the DISC color framework. Know yourself. Communicate better.
            </p>
            <a href="https://huetype.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm tracking-wide hover:opacity-60 transition-opacity" style={{ color: 'var(--moss)', fontWeight: 400 }}>
              Visit huetype.com →
            </a>
          </div>
          <div className="relative">
            <div style={{ background: 'var(--parchment)', padding: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -16, right: -16, width: 120, height: 120, border: '1px solid rgba(44,26,14,0.08)', borderRadius: '50%' }} />
              <p className="font-display text-5xl mb-2" style={{ color: 'var(--oak)', fontWeight: 300 }}>25</p>
              <p className="text-sm opacity-50 mb-6" style={{ color: 'var(--bark)' }}>questions across 5 life contexts</p>
              <div className="flex flex-col gap-3">
                {['Social situations', 'Personal relationships', 'Problem-solving', 'Workplace dynamics', 'Core values'].map(c => (
                  <div key={c} className="flex items-center gap-3">
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--moss)', flexShrink: 0 }} />
                    <p className="text-sm opacity-60" style={{ color: 'var(--bark)', fontWeight: 300 }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--parchment)' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--oak)', fontWeight: 300 }}>
            Interested in working together?
          </h2>
          <p className="text-base opacity-60 mb-10 max-w-md mx-auto" style={{ color: 'var(--bark)', fontWeight: 300 }}>
            We occasionally take on partnerships, licensing, and consulting engagements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wide" style={{ background: 'var(--oak)', color: 'var(--cream)' }}>
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  )
}
