import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { Image } from 'react-datocms';
import { StartDocument } from '../graphql';

export default async function Home() {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument)

  return (
    <>
      <div className={s.page}>
        <h1>Home</h1>
        <p>This is the home page</p>
      </div>
      <DraftMode url={draftUrl} path={'/'} />
    </>
  )
}