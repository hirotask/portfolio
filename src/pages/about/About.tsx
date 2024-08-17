import { FC } from 'react'

import DefaultContainer from '../../components/DefaultContainer'
import IconImage from '../../assets/myicon.png'

const aboutme = [
  '名前: 波紫寛斗',
  'ニックネーム: hirotask',
  'Twitter: @Hirotask_',
  '誕生日: 2001年5月24日',
]

const career = [
  '2018/01 Minecraftのプラグイン制作を始める',
  '2018/11 葛巻町主催ドイツ研修 参加',
  '2020/03 岩手県立葛巻高等学校　卒業',
  '2020/04 岩手県立大学　ソフトウェア情報学部　入学',
  '2020/09 基礎教養入門2にて初めてのチーム開発ジョイン',
  '2021/08 滝沢イノベーションチャレンジ　１回目の参加',
  '2021/08 葛巻町プログラミング教室　企画したがコロナの影響で中止',
  '2021/09 プロジェクト演習1にて、「車の問題解決アプリ」の開発',
  '2022/05 「東北Tech道場」ジョイン＆Androidアプリ開発開始',
  '2022/07 Minecraftのプラグインチーム開発開始',
  '2024/03 岩手県立大学　ソフトウェア情報学士　修得',
  '2024/04 株式会社システムアイ　入社',
]

/**
 * Aboutページコンポーネント
 */
const About: FC = () => {
  return (
    <DefaultContainer title='About'>
      <div className='flex flex-col md:flex-row justify-evenly align-middle md:items-start text-center md:text-left'>
        <img
          src={IconImage}
          alt={'This is my icon'}
          className='sm:w-96 w-56 rounded-full object-cover'
        />
        <div className='md:ml-12 text-lg md:text-xl'>
          <div className='mb-6'>
            {aboutme.map((msg, key) => (
              <h6 key={key} className='font-["Arial"]'>
                {msg}
              </h6>
            ))}
          </div>
          <div className='text-gray-600'>
            {career.map((msg, key) => (
              <h6 key={key} className='font-["Arial"] mb-4'>
                {msg}
              </h6>
            ))}
          </div>
        </div>
      </div>
    </DefaultContainer>
  )
}

export default About
