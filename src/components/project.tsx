import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type ProjectProps = {
  title: string
  description: string
  href: string
  icon: string
}

export default function Project({
  title,
  description,
  href,
  icon
}: ProjectProps) {
  return (
    <div className="mb-5">
      <h3 className="flex items-center gap-2">
        {}
        <Image
          src={icon}
          alt="Favicon"
          className="h-5 w-5"
          height={20}
          width={20}
        />

        <div className="group flex items-center gap-2">
          <Link href={href} target="_blank" className="text-[16px]">
            {title}
          </Link>
          <ArrowUpRight className="-ml-2 -mt-2 h-3 w-3 transform text-foreground/30" />
        </div>
      </h3>

      <p className="mt-[3px] text-sm text-foreground/80">{description}</p>
    </div>
  )
}
