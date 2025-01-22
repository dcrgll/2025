import Counter from './counter'

export default function Footer() {
  return (
    <footer className="mt-4 flex w-full items-center justify-between text-xs text-foreground/50">
      <Counter />
      <span>© {new Date().getFullYear()}</span>
    </footer>
  )
}
