import s from './Article.module.scss'
import cn from 'classnames';
import Content from '@components/content/Content';
import { Image } from 'react-datocms';

export type ArticleProps = {
  id?: string
  title?: string;
  intro?: any;
  image?: FileField
  content?: any;
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

export default async function Article({
  id,
  title,
  intro,
  content,
  image,
  className,
  children
}: ArticleProps) {

  return (

    <article className={cn(s.article, className)}>
      <div className={s.left}>
        {image &&
          <figure>
            <Image data={image.responsiveImage} />
          </figure>
        }
      </div>
      <div className={s.right}>
        <h1>{title}</h1>
        {intro && <Content className={s.intro} content={intro} />}
        {content && <Content className={s.text} content={content} />}
        {children}
      </div>
    </article>
  );
}