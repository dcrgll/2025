import { links } from '@/lib/site'
import Link from 'next/link'

export default function Intro() {
  const renderLinks = () => {
    return (
      <ul className='mt-5 flex space-x-4'>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              target='_blank'
              className='text-foreground/70 hover:text-foreground transition-colors duration-300'
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
      <h1 className='mt-5 font-serif text-4xl'>
        <b className='text-foreground block'>
          Hey, I&apos;m <em className='text-primary not-italic'>Dan</em>.
        </b>
        <span className='text-foreground/40'>Playing the internet</span>
        <br />
        <b className='text-foreground'>in London, UK</b>.
      </h1>
      <nav>{renderLinks()}</nav>
    </>
  )
}
