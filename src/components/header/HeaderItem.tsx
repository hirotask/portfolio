import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HeaderItemProps {
  title: string
  link: string
}

/**
 * Headerにある一個一個の要素
 */
const HeaderItem: FC<HeaderItemProps> = ({ title, link }) => {
  return (
    <li className="rotate-[-20deg] text-[#5a5a5a] border-b border-black list-none text-4xl font-['Shadows_Into_Light'] font-bold">
      <Link
        to={link}
        className='text-inherit no-underline hover:bg-[rgba(125,201,255,0.6)]'>
        {title}
      </Link>
    </li>
  )
}

export default HeaderItem
