import '@styles/index.scss'
import { apiQuery } from 'next-dato-utils/api';
import { GlobalDocument } from '@graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import WhatMakesAHome from '../components/common/WhatMakesAHome';
import { buildMenu } from '../lib/menu';
import NavBar from '../components/nav/NavBar';
import LayoutTransition from '../components/common/LayoutTransition';

export type LayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {

  const menu = await buildMenu()

  return (
    <>
      <html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <body id="root" >
          <WhatMakesAHome />
          <NavBar menu={menu} />
          <LayoutTransition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <main>
              {children}
            </main>
          </LayoutTransition>
        </body>
      </html >
    </>
  );
}

export async function generateMetadata() {

  const { site: { globalSeo, faviconMetaTags } } = await apiQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, {
    variables: {},
    revalidate: 60 * 60
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
    title: {
      template: `${globalSeo?.siteName} — %s`,
      default: globalSeo?.siteName,
    },
    description: globalSeo?.fallbackSeo?.description,
    image: globalSeo?.fallbackSeo?.image?.url,
    icons: faviconMetaTags.map(({ attributes: { rel, sizes, type, href: url } }) => ({ rel, url, sizes, type })) as Icon[],
    openGraph: {
      title: globalSeo?.siteName,
      description: globalSeo?.fallbackSeo?.description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: globalSeo?.siteName,
      images: globalSeo?.fallbackSeo?.image ? [
        {
          url: `${globalSeo?.fallbackSeo?.image?.url}?w=1200&h=630&fit=fill&q=80`,
          width: 800,
          height: 600,
          alt: globalSeo?.siteName
        },
        {
          url: `${globalSeo?.fallbackSeo?.image?.url}?w=1600&h=800&fit=fill&q=80`,
          width: 1600,
          height: 800,
          alt: globalSeo?.siteName
        },
        {
          url: `${globalSeo?.fallbackSeo?.image?.url}?w=790&h=627&fit=crop&q=80`,
          width: 790,
          height: 627,
          alt: globalSeo?.siteName
        },
      ] : [],
      locale: 'en_US',
      type: 'website',
    },
  } as Metadata
}
