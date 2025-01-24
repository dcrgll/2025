import Link from 'next/link'

type Link = {
  href: string
  text: string
}

const links: Link[] = [
  {
    href: 'https://github.com/dcrgll',
    text: 'Github'
  },
  {
    href: 'https://linkedin.com/in/dancargill',
    text: 'LinkedIn'
  },
  {
    href: 'https://instagram.com/dncrgll',
    text: 'Instagram'
  },
  {
    href: 'https://cargill.cv',
    text: 'CV'
  }
]

export default function Intro() {
  const renderLinks = () => {
    return (
      <ul className="mt-5 flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <>
      <h1 className="mt-5 font-serif text-4xl">
        <b className="block text-foreground">
          Hey, I&apos;m <em className="not-italic text-primary">Dan</em>.
        </b>
        <span className="text-foreground/40">Playing the internet</span>
        <br />
        <b className="text-foreground">in London, UK</b>.
      </h1>
      <nav>{renderLinks()}</nav>
    </>
  )
}
