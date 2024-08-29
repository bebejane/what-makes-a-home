import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import Content from '../../components/content/Content';
import { AllVenuesDocument } from '../../graphql';
import { Image } from 'react-datocms';
import { format } from 'date-fns';

export default async function Page() {

  const { allVenues, draftUrl } = await apiQuery<AllVenuesQuery, AllVenuesQueryVariables>(AllVenuesDocument)

  return (
    <>
      <article className={s.visit}>
        <div>
          <h1>Visit</h1>
          <ul>
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
        </div>
      </article>
      <DraftMode url={draftUrl} path={'/about'} />
    </>
  )
}