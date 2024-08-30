import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'What makes a home',
    short_name: 'What makes a home',
    description: 'What makes a home',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1700e2',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}