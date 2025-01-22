import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type ProjectProps = {
  title: string
  description: string
  href: string
}

export default function Project({ title, description, href }: ProjectProps) {
  return (
    <div className="mb-5">
      <h3 className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            `https://www.google.com/s2/favicons?domain=${href}&sz=64` ||
            '/favicon.ico'
          }
          alt="Favicon"
          className="h-5 w-5"
        />

        <div className="group flex items-center gap-2">
          <Link href={href} target="_blank" className="text-[16px]">
            {title}
          </Link>
          <ArrowUpRight className="-ml-2 -mt-2 h-3 w-3 transform text-foreground/30 transition-all duration-300 group-hover:-ml-1 group-hover:-mt-3" />
        </div>
      </h3>

      <p className="mt-[3px] text-sm text-foreground/80">{description}</p>
    </div>
  )
}
