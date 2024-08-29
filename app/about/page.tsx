import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { Image } from 'react-datocms';

export default async function Page() {

  ///const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument)

  return (
    <>
      <h1>Page</h1>
    </>
  )
}