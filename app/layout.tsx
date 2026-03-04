import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Red Oak Tree PTY — Digital Products Studio',
  description: 'Red Oak Tree PTY is an Australian digital products studio building thoughtful software for self-discovery, communication, and human insight.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="grain" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
