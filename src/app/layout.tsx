import { jsonLd, metadata } from '@/lib/meta'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

import Background from '@/components/background'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin']
})

const sfRounded = localFont({
  variable: '--font-sf-rounded',
  src: '../../public/fonts/SF Pro Rounded Bold.otf'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${interSans.variable} ${sfRounded.variable} font-sans antialiased`}
      >
        <Background />
        {children}
        <script
          type='application/ld+json'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <Need to set JSON-LD>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}

export { metadata }
