import { revalidate } from 'next-dato-utils/route-handlers';
import { buildRoute } from '@lib/routes';
export const runtime = "edge"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {

  return await revalidate(req, async (payload, revalidate) => {

    const { api_key, entity } = payload;
    const { id, attributes } = entity
    const tags: string[] = [api_key, id].filter(t => t)
    const paths: string[] = []
    const path = await buildRoute(api_key, attributes)

    if (path)
      paths.push(path)

    paths.push('/')

    return await revalidate(paths, tags, true)
  })
}