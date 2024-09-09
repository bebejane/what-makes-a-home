import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { ExhibitionDocument } from '../../graphql';
import Article from '../../components/common/Article';

export default async function Page() {

  const { exhibition: { id, text, intro, image, logo }, draftUrl } = await apiQuery<ExhibitionQuery, ExhibitionQueryVariables>(ExhibitionDocument)

  return (
    <>
      <Article id={id} title={'The Project'} content={text} intro={intro} image={image as FileField} >
        {logo && <img className={s.logos} src={logo.url} alt={logo.alt} />}
      </Article>
      <DraftMode url={draftUrl} path={'/exhibition'} />
    </>
  )
}