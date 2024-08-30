import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import Content from '../../components/content/Content';
import { ExhibitionDocument } from '../../graphql';
import { Image } from 'react-datocms/image';

export default async function Page() {

  const { exhibition, draftUrl } = await apiQuery<ExhibitionQuery, ExhibitionQueryVariables>(ExhibitionDocument)

  return (
    <>
      <article>
        <div>
          <figure>
            <Image data={exhibition.image.responsiveImage} />
          </figure>
        </div>
        <div>
          <h1>The Exhibition</h1>
          <Content content={exhibition.text} />
        </div>
      </article>
      <DraftMode url={draftUrl} path={'/exhibition'} />
    </>
  )
}