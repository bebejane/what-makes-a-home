import s from './ImageBlock.module.scss'
import { Image } from 'react-datocms'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  data: ImageBlockRecord
}

export default async function ImageBlock({ data: { id, image } }: Props) {

  return (
    <figure className={s.figure}>
      <Image data={image.responsiveImage} pictureClassName={s.picture} />
    </figure>
  )
}