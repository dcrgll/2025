import Footer from './footer'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto max-w-[410px] px-4">
      {children} <Footer />
    </main>
  )
}
