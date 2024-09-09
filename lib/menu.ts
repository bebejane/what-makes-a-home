
export type Menu = MenuItem[]

export type MenuItem = {
  type: string
  index?: boolean
  label: string
  slug?: string
  external?: boolean
  sub?: MenuItem[]
}

const base: Menu = [
  { type: 'home', label: 'Home', slug: '/' },
  { type: 'visit', label: 'The Exhibitions', slug: '/visit' },
  { type: 'exhibition', label: 'The Project', slug: '/exhibition' },
  { type: 'book', label: 'The Book', slug: '/book' },
  { type: 'about', label: 'About', slug: '/about' },
]

export const buildMenu = async () => {

  const menu = base.map(item => {
    return item
  })

  return menu
}