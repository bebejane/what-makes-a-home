import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import Article from '../../components/common/Article';

export default async function Page() {

  ///const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument)

  return (
    <>
      <Article title={'The Book'} />
    </>
  )
}