'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header style={{ borderBottom: '1px solid rgba(44,26,14,0.08)' }} className="sticky top-0 z-50 backdrop-blur-sm" >
      <div style={{ background: 'rgba(253,250,245,0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/icons/redoaktree-icon-oak.svg" width={28} height={28} alt="Red Oak Tree" />
            <span className="font-display text-xl tracking-wide" style={{ color: 'var(--oak)', fontWeight: 500 }}>
              Red Oak Tree
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm tracking-wide transition-opacity hover:opacity-60" style={{ color: 'var(--bark)', fontWeight: 400 }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="block w-6 h-px" style={{ background: 'var(--oak)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
            <span className="block w-6 h-px" style={{ background: 'var(--oak)', opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-px" style={{ background: 'var(--oak)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm tracking-wide py-2" style={{ color: 'var(--bark)', borderBottom: '1px solid rgba(44,26,14,0.06)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
