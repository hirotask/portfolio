import microCMSClient from '../utils/microCMSClient'
import { z } from 'zod'

const workScheme = z.object({
  id: z.string(),
  thumbnail: z.object({
    height: z.number(),
    width: z.number(),
    url: z.string(),
  }),
  title: z.string(),
  tags: z.array(z.string()),
  date: z.ostring(),
  description: z.string(),
})

const worksScheme = z.array(workScheme)

export type Work = z.infer<typeof workScheme>

export type Works = z.infer<typeof worksScheme>

const client = microCMSClient()

function validateWorks(works: unknown): Works {
  return worksScheme.parse(works)
}

export async function getWork(id: string): Promise<Work> {
  const work = await client.get({
    endpoint: `works?ids=${id}&limit=1`,
  })

  const parsedWork = validateWorks(work.contents)

  if (parsedWork.length <= 0) throw new Error('The work is not found')

  return parsedWork[0]
}

export async function getWorks(): Promise<Works> {
  const works = await client.get({
    endpoint: `works`,
  })

  const parsedWorks = validateWorks(works.contents)

  return parsedWorks
}
