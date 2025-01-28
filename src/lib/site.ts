type Site = {
  url: string
}

type Link = {
  href: string
  text: string
}

export const site = {
  url: 'https://cargill.dev'
}

export const links: Link[] = [
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
