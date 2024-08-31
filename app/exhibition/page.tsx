import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { ExhibitionDocument } from '../../graphql';
import Article from '../../components/common/Article';

export default async function Page() {

  const { exhibition: { id, text, intro, image }, draftUrl } = await apiQuery<ExhibitionQuery, ExhibitionQueryVariables>(ExhibitionDocument)

  return (
    <>
      <Article id={id} title={'The Exhibition'} content={text} intro={intro} image={image as FileField} />
      <DraftMode url={draftUrl} path={'/exhibition'} />
    </>
  )
}