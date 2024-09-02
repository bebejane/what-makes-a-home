import s from './page.module.scss'
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { AllVenuesDocument } from '../../graphql';
import VenuesArticle from './VenuesArticle';

export default async function Page() {

  const { allVenues, draftUrl } = await apiQuery<AllVenuesQuery, AllVenuesQueryVariables>(AllVenuesDocument)

  return (
    <>
      <VenuesArticle allVenues={allVenues} />
      <DraftMode url={draftUrl} path={'/about'} />
    </>
  )
}