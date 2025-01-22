export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto flex max-w-[410px] flex-col px-4">
      {children}
    </main>
  )
}
