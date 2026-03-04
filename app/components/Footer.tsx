import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(44,26,14,0.08)', background: 'var(--parchment)' }} className="mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Image
            src="/icons/redoaktree-icon-oak.svg"
            width={24}
            height={24}
            alt="Red Oak Tree"
          />
            <p className="font-display text-lg" style={{ color: 'var(--oak)', fontWeight: 500 }}>Red Oak Tree PTY</p>
          </div>
          <p className="text-sm mt-1 opacity-50" style={{ color: 'var(--bark)' }}>ABN · Australia</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {[
            { href: '/about', label: 'About' },
            { href: '/products', label: 'Products' },
            { href: '/contact', label: 'Contact' },
            { href: '/privacy', label: 'Privacy Policy' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--bark)' }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs opacity-40" style={{ color: 'var(--bark)' }}>© {new Date().getFullYear()} Red Oak Tree PTY</p>
      </div>
    </footer>
  )
}
