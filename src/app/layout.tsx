import type { Metadata } from 'next'
import '@ibm/plex-mono/css/ibm-plex-mono-all.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Password Generator',
  description: 'A place to generate secure password',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
