import actImage from '../assets/act.jpg'
import expirationImage from '../assets/expiration.png'

export interface Work {
  image: string
  title: string
  tags: string
  date: string
  description: string
}

const works: Work[] = [
  {
    image: actImage,
    title: '演劇',
    tags: 'Circle',
    date: '2024.03',
    description: '後でかく',
  },
  {
    image: expirationImage,
    title: '演劇',
    tags: 'Circle',
    date: '2024.03',
    description: '後でかく',
  },
]

export function getWork(id: number): Work {
  return works[id]
}

export function getWorks(): Work[] {
  return works
}
