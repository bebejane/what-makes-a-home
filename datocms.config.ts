import { DatoCmsConfig, getUploadReferenceRoutes } from 'next-dato-utils/config';
import { MetadataRoute } from 'next';

export default {
	routes: {
		start: async () => ['/'],
		venue: async () => ['/visit'],
		exhibition: async () => ['/exhibition'],
		about: async () => ['/about'],
		book: async () => ['/book'],
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		return [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
				lastModified: new Date(),
				changeFrequency: 'weekly',
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
		] as MetadataRoute.Sitemap;
	},
	manifest: async () => {
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
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
			},
		};
	},
} satisfies DatoCmsConfig;
