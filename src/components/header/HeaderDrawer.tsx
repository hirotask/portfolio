import { useCallback, useState, FC } from 'react'
import { HeaderContents } from './Header'

interface HeaderDrawerProps {
  contents: HeaderContents
}

/**
 * ドロワーコンポーネント
 */
const HeaderDrawer: FC<HeaderDrawerProps> = ({ contents }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        (event as React.KeyboardEvent).key.match(/Tab|Shift/)
      ) {
        return
      }
      setIsOpen(!isOpen)
    },
    [isOpen]
  )

  return (
    <>
      <button onClick={toggleDrawer} type='button' className='z-10 space-y-2'>
        <div
          className={
            isOpen
              ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
              : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
          }
        />
        <div
          className={
            isOpen
              ? 'opacity-0 transition duration-500 ease-in-out'
              : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
          }
        />
        <div
          className={
            isOpen
              ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out'
              : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
          }
        />
      </button>
      <nav
        className={
          isOpen
            ? 'text-left fixed bg-[rgba(0,0,0,0.7)] right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-10 px-3 ease-linear duration-300'
            : 'fixed right-[-100%] ease-linear duration-300'
        }>
        <ul className='mt-6'>
          {contents.map((content, idx) => (
            <a key={idx} href={content.route}>
              <li className='border-b-[2px] border-white p-4'>
                <h4 className='text-white text-2xl'>{content.title}</h4>
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default HeaderDrawer
