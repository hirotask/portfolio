import { FC } from 'react'
import DefaultContainer from '../../components/DefaultContainer'
import { getWorks } from '../../store/work'
import { Link } from 'react-router-dom'

const Works: FC = () => {
  return (
    <DefaultContainer title='Works'>
      <div className='grid gap-4 md:grid-cols-2 sm:grid-cols-1'>
        {getWorks().map((work, index) => (
          <div
            key={index}
            className='relative group w-full h-64 bg-gray-200 overflow-hidden'>
            <Link to={`/works/${index}`}>
              <img
                src={work.image}
                alt={`image-${index}`}
                className='object-cover w-full h-full'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='text-center'>
                  <p className='text-white text-lg font-bold'>{work.title}</p>
                  <small className='text-white text-m font-bold'>
                    {work.tags} | {work.date}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </DefaultContainer>
  )
}

export default Works
