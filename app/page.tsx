import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { StartDocument } from '../graphql';
import StartGallery from '../components/common/StartGallery';

export default async function Home() {

  const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument)

  return (
    <>
      <StartGallery slides={start.slideshow as (ImageBlockRecord | TextBlockRecord | VideoBlockRecord)[]} />
      <DraftMode url={draftUrl} path={'/'} />
    </>
  )
}