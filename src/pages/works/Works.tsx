import { FC, useEffect, useState } from 'react'
import DefaultContainer from '../../components/DefaultContainer'
import { getWorks, Work } from '../../store/work'
import { Link } from 'react-router-dom'

const Works: FC = () => {
  const [works, setWorks] = useState<Work[]>([])

  useEffect(() => {
    getWorks()
      .then((ws) => {
        setWorks(ws)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [works])

  return (
    <DefaultContainer title='Works'>
      <div className='grid gap-4 md:grid-cols-2 sm:grid-cols-1'>
        {works.map((work, index) => (
          <div
            key={index}
            className='relative group w-full h-64 bg-gray-200 overflow-hidden'>
            <Link to={`/works/${work.id}`}>
              <img
                src={work.thumbnail.url}
                alt={`image-${index}`}
                className='object-cover w-full h-full'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='text-center'>
                  <p className='text-white text-lg font-bold'>{work.title}</p>
                  <small className='text-white text-m font-bold'>
                    {work.tags.length > 0
                      ? work.date != null
                        ? `${work.tags} | ${work.date}`
                        : `${work.tags}`
                      : ``}
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
