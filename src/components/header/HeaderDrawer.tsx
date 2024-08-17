import { MenuOutlined } from '@mui/icons-material'
import { IconButton, Drawer } from '@mui/material'
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
      <IconButton color='info' onClick={toggleDrawer}>
        <MenuOutlined fontSize='large' />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer} anchor='right'>
        <div className='w-[40vw] h-[100vh] bg-[rgba(0,0,0,0.7)]'>
          <ul>
            {contents.map((content, idx) => (
              <a key={idx} href={content.route}>
                <li className='border-b-[2px] border-white p-4'>
                  <h4 className='text-white text-2xl'>{content.title}</h4>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </Drawer>
    </>
  )
}

export default HeaderDrawer
