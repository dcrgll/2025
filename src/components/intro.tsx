'use client'

import { links } from '@/lib/site'
import { motion } from 'motion/react'

import Link from 'next/link'
import { useState } from 'react'

export default function Intro() {
  const [showSecondLine, setShowSecondLine] = useState(false)

  const renderLinks = () => (
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

  return (
    <>
      <h1 className='mt-5 font-serif text-4xl'>
        <b className='text-foreground block'>
          Hey, I&apos;m <em className='text-primary not-italic'>Dan</em>.
        </b>
        <span className='relative inline-block text-foreground/40 font-serif'>
          {showSecondLine ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              Playing with <span className='text-tertiary'>Apps</span> &{' '}
              <span className='text-secondary italic'>AI</span>
            </motion.span>
          ) : (
            <>
              Playing the internet
              <motion.div
                className='absolute left-0 top-1/2 h-[2px] w-full bg-secondary origin-left'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
                onAnimationComplete={() => setShowSecondLine(true)}
              />
            </>
          )}
        </span>
        <br />
        <b className='text-foreground'>in London, UK</b>.
      </h1>

      <nav>{renderLinks()}</nav>
    </>
  )
}
