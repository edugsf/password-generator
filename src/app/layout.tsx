import type { Metadata } from 'next'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-700.css'
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
