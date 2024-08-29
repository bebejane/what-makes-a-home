import s from './page.module.scss'
import Link from "next/link"
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { Image } from 'react-datocms';
import { StartDocument } from '../graphql';
import StartGallery from '../components/common/StartGallery';
import WhatMakesAHome from '../components/common/WhatMakesAHome';

export default async function Home() {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument)


  return (
    <>
      <StartGallery slides={start.slideshow} />
      <DraftMode url={draftUrl} path={'/'} />
    </>
  )
}