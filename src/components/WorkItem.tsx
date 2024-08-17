import React from 'react'

interface WorkItemProps {
  link: string
  image: string
  title: string
  tags: string
  date: string
}

const WorkItem: React.FC<WorkItemProps> = ({ image, title, tags, date }) => {
  return (
    <div className='border-2 border-blue-800 flex mb-5 max-h-40 font-["Arial"]'>
      {/* 左側の画像部分 */}
      <div className='flex-none'>
        <img
          src={image}
          alt={title}
          className='w-[255px] h-full object-cover'
        />
      </div>

      {/* 右側のテキスト部分 */}
      <div className='flex flex-col w-full'>
        {/* タイトル部分 */}
        <div className='flex-1 flex items-center border-b-2 border-blue-800 p-4'>
          <h2 className='text-blue-800 text-2xl'>{title}</h2>
        </div>

        {/* タグと日付部分 */}
        <div className='flex-1 flex border-t-2 border-blue-800'>
          <div className='flex-1 flex items-center justify-center border-r-2 border-blue-800 p-4'>
            <p className='text-blue-800'>{`tags: ${tags}`}</p>
          </div>
          <div className='flex-1 flex items-center justify-center p-4'>
            <p className='text-blue-800'>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
