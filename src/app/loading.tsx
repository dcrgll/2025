export default function Loading() {
  return (
    <main className="container mx-auto flex max-w-[410px] flex-col">
      <h1 className="font-serif text-4xl">
        <div className="bg-foreground/10 block h-10 w-56 animate-pulse rounded"></div>
        <div className="bg-foreground/5 mt-2 h-10 w-72 animate-pulse rounded"></div>
        <div className="bg-foreground/10 mt-4 h-10 w-56 animate-pulse rounded"></div>
      </h1>

      <nav className="mt-4 flex gap-2">
        <div className="bg-foreground/10 h-4 w-16 animate-pulse rounded"></div>
        <div className="bg-foreground/10 h-4 w-16 animate-pulse rounded"></div>
        <div className="bg-foreground/10 h-4 w-16 animate-pulse rounded"></div>
        <div className="bg-foreground/10 h-4 w-16 animate-pulse rounded"></div>
      </nav>
    </main>
  )
}
