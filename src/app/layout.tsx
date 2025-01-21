import type { Metadata } from 'next'
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
  title: 'Create Next App',
  description: 'Generated by create next app'
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
