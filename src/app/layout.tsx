import type { Metadata, Viewport } from 'next'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://cargill.dev'),
  title: {
    template: '%s | Dan Cargill',
    default: 'Dan Cargill'
  },
  description: 'software engineer, designer, and musician.',
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    url: 'https://cargill.dev',
    title: 'Dan Cargill',
    description: 'software engineer, designer, and musician.'
  }
}

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
    <html lang="en">
      <body
        className={`${interSans.variable} ${sfRounded.variable} my-36 font-sans antialiased`}
      >
        <Background />
        {children}
      </body>
    </html>
  )
}
