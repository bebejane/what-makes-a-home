import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import Content from '../../components/content/Content';
import { AboutDocument } from '../../graphql';
import { Image } from 'react-datocms';

export default async function Page() {

  const { about, draftUrl } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument)

  return (
    <>
      <article>
        <div>
          <Image data={about.image.responsiveImage} />
        </div>
        <div>
          <h1>About</h1>
          <Content content={about.text} />
        </div>
      </article>
      <DraftMode url={draftUrl} path={'/about'} />
    </>
  )
}