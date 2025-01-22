import Link from 'next/link'

import Container from '@/components/container'

export default function NotFound() {
  return (
    <Container>
      <section className="flex h-full flex-1 flex-col items-center justify-center">
        <h1 className="font-serif">404</h1>
        <p>Page not found</p>

        <Link href="/" className="underline">
          Go back someplace safe
        </Link>
      </section>
    </Container>
  )
}
