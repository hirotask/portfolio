import { FC } from 'react'

import HeaderItem from './HeaderItem'
import HeaderDrawer from './HeaderDrawer'

interface HeaderContent {
  title: string
  route: string
}

export type HeaderContents = HeaderContent[]

const headerContents: HeaderContents = [
  {
    title: 'Home',
    route: '/',
  },
  {
    title: 'About',
    route: '/about',
  },
  {
    title: 'Works',
    route: '/works',
  },
  {
    title: 'Contact',
    route: '/contact',
  },
]

/**
 * ヘッダーのコンポーネント
 */
export const Header: FC = () => {
  return (
    <header className='mb-20 w-full'>
      <div className='hidden sm:block'>
        <ul className='flex justify-around'>
          {headerContents.map((content, idx) => (
            <HeaderItem key={idx} title={content.title} link={content.route} />
          ))}
        </ul>
      </div>
      <div className='block sm:hidden text-right'>
        <HeaderDrawer contents={headerContents} />
      </div>
    </header>
  )
}

export default Header
