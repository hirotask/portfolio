import { FC } from 'react'
import DefaultContainer from '../../components/DefaultContainer'
import IconImage from '../../assets/myicon.png'

/**
 * Contactページコンポーネント
 */
const Contact: FC = () => {
  return (
    <DefaultContainer title='Contact'>
      <div className='flex flex-col items-center text-center'>
        <img
          src={IconImage}
          alt={'This is my icon'}
          className='sm:w-56 w-48 rounded-full object-cover'
        />
        <h1 className="text-[40px] sm:text-[80px] font-['Shadows_Into_Light'] italic font-bold">
          FOLLOW ME
        </h1>
        <div
          className={`flex ${
            window.innerWidth < 640 ? 'flex-col' : 'flex-row'
          } mt-4 space-x-4 sm:space-x-6`}>
          <a
            href='https://github.com/hirotask'
            className='text-inherit hover:text-gray-500 transition-colors'>
            <span className='i-grommet-icons-github sm:text-[60px] text-[40px]' />
          </a>
          <a
            href='https://twitter.com/Hirotask_'
            className='text-inherit hover:text-gray-500 transition-colors'>
            <span className='i-grommet-icons-x text-[40px] sm:text-[60px]' />
          </a>
          <a
            href='https://www.instagram.com/hirotask_/?hl=ja'
            className='text-inherit hover:text-gray-500 transition-colors'>
            <span className='i-grommet-icons-instagram text-[40px] sm:text-[60px]' />
          </a>
        </div>
      </div>
    </DefaultContainer>
  )
}

export default Contact
