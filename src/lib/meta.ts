import type { Metadata } from 'next'
import { site } from './site'

type JsonLd = {
  '@context': string
  '@type': string
  name: string
  givenName: string
  familyName: string
  gender: string
  knowsLanguage: string[]
  nationality: string
  description: string
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: '%s | Dan Cargill',
    default: 'Dan Cargill'
  },
  description: 'software engineer, designer, and musician.',
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    url: site.url,
    title: 'Dan Cargill',
    description: 'software engineer, designer, and musician.',
    siteName: 'Dan Cargill'
  },
  icons: {
    icon: [
      {
        url: '/images/favicon.svg'
      }
    ]
  }
}

export const jsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dan Cargill',
  givenName: 'Dan',
  familyName: 'Cargill',
  gender: 'Male',
  knowsLanguage: ['English'],
  nationality: 'British',
  description:
    "Hey! I'm Dan Cargill, a software engineer, designer, and musician based in London, UK."
}
