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
        <div className={s.logos}>
          <p className="very-small">With support from</p>
          {logo && <img src={logo.url} alt={logo.alt} />}
        </div>
      </Article>
      <DraftMode url={draftUrl} path={'/exhibition'} />
    </>
  )
}