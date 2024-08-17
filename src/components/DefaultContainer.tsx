import { useEffect, ReactNode } from 'react'
import { Header } from './header/Header'

interface DefaultContainerProps {
  children: ReactNode
  title: string
}

/**
 * すべてのページの基礎となるコンポーネント
 */
const DefaultContainer: React.FC<DefaultContainerProps> = ({
  children,
  title,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ページタイトルを変更する関数
  useEffect(() => {
    document.title = `${title} | Hirotask Portfolio`
  }, [title])

  return (
    <div className='min-h-[95vh] border-[20px] border-[#478dc0] p-12 my-10 mx-[2%]'>
      {' '}
      <Header />
      {children}
    </div>
  )
}

export default DefaultContainer
