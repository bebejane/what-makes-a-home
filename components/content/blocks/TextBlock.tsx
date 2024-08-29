import s from './TextBlock.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { Image } from 'react-datocms'

type Props = {
  data: TextBlockRecord
}

export default async function TextBlock({ data: { id, duration, smallHeadline, text } }: Props) {

  return (
    <div className={cn(s.container)}>
      <h2 className={s.smallHeadline}>{smallHeadline}</h2>
      <p className={s.text}>{text}</p>
    </div>
  )
}