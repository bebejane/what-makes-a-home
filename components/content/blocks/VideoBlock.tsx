import s from './VideoBlock.module.scss'
import { VideoPlayer } from 'next-dato-utils/components'
import { Image } from 'react-datocms'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  data: VideoBlockRecord
}

export default async function ImageBlock({ data: { id, video, duration } }: Props) {

  return (
    <VideoPlayer className={s.video} data={video} muted={true} autoPlay={true} />
  )
}