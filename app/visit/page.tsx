import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { AllVenuesDocument } from '../../graphql';
import VenuesArticle from './VenuesArticle';

export default async function Page() {

  const { allVenues, draftUrl } = await apiQuery<AllVenuesQuery, AllVenuesQueryVariables>(AllVenuesDocument)

  return (
    <>
      <VenuesArticle allVenues={allVenues} />
      <DraftMode url={draftUrl} path={'/visit'} />
    </>
  )
}

/*
const parseVenueStatus = (venue: VenueRecord): string => {

  const status = {
    'soon': 'Opening soon',
    'open': 'Open now',
    'past': 'Past Exhibitions',
  }

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const opening = new Date(venue.openingDate); opening.setHours(0, 0, 0, 0);
  const closing = new Date(venue.closingDate); closing.setHours(23, 59, 59, 0);

  if (today < opening) {
    return status.soon;
  } else if (today >= opening && today <= closing) {
    return status.open;
  } else {
    return status.past;
  }
}
*/