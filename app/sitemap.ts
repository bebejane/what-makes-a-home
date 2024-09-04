import { MetadataRoute } from 'next'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/visit`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/exhibition`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/book`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },


]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    ...staticRoutes
  ]
}