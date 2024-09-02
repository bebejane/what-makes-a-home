import s from './TextBlock.module.scss'
import cn from 'classnames'

type Props = {
  data: TextBlockRecord
}

export default async function TextBlock({ data: { smallHeadline, text } }: Props) {

  return (
    <div className={cn(s.container)}>
      <h2 className={s.smallHeadline}>{smallHeadline}</h2>
      <h3 className={s.text}>{text}</h3>
    </div>
  )
}