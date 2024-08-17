import { FC } from 'react'

import DefaultContainer from '../../components/DefaultContainer'
import IconImage from '../../assets/myicon.png'

/**
 * ホームページコンポーネント
 */
const Home: FC = () => {
  return (
    <DefaultContainer title='Home'>
      <div className='flex flex-col sm:flex-row items-center justify-evenly text-center sm:text-left'>
        <img
          src={IconImage}
          alt={'This is my icon'}
          className='sm:w-96 w-56 rounded-full object-cover'
        />
        <h1 className="font-['Shadows_Into_Light'] text-[80px] sm:text-[100px] font-bold sm:ml-[100px]">
          Hiroto Hashi
        </h1>
      </div>
    </DefaultContainer>
  )
}

export default Home
