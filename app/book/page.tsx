import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { Image } from 'react-datocms';

export default async function Page() {

  ///const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument)

  return (
    <>
      <article>
        <div></div>
        <div>
          <h1>Book</h1>
        </div>
      </article>
    </>
  )
}