import { FC } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { getWork, Work } from '../../store/work'
import DefaultContainer from '../../components/DefaultContainer'

export const workDetailLoader: LoaderFunction = async ({
  params,
}): Promise<Work> => {
  const work = await getWork(parseInt(params.id ?? '1'))
  return work
}

const WorkDetail: FC = () => {
  const work = useLoaderData() as Work
  return (
    <DefaultContainer title={`${work.title} の詳細`}>
      <h1>{work.title}</h1>
      <img src={work.image} />
      <div>
        <p>{work.description}</p>
      </div>
    </DefaultContainer>
  )
}

export default WorkDetail
