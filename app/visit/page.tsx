import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { AllVenuesDocument } from '../../graphql';
import { format } from 'date-fns';
import Article from '../../components/common/Article';

export default async function Page() {

  const { allVenues, draftUrl } = await apiQuery<AllVenuesQuery, AllVenuesQueryVariables>(AllVenuesDocument)

  return (
    <>
      <Article title={'Visit'} className={s.visit}>
        <ul className={s.venues}>
          {allVenues.map((venue, idx) =>
            <li key={idx}>
              <h3>Opening soon</h3>
              <div>{venue.city}</div>
              <div suppressHydrationWarning={true}>
                {format(new Date(venue.openingDate), 'MMMM dd, yyyy')}
              </div>
            </li>
          )}
        </ul>
      </Article>
      <DraftMode url={draftUrl} path={'/about'} />
    </>
  )
}