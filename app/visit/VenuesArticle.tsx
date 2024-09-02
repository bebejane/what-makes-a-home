'use client';

import React from 'react';
import s from './VenuesArticle.module.scss';
import articleStyle from '../../components/common/Article.module.scss';
import cn from 'classnames'
import { format } from 'date-fns';
import Content from '../../components/content/Content';
import { Image } from 'react-datocms';
import { VideoPlayer } from 'next-dato-utils/components';

export type Props = {
  allVenues: AllVenuesQuery['allVenues'],
}
export default function VenuesArticle({ allVenues }: Props) {

  const [selected, setSelected] = React.useState<VenueRecord | null>(null);
  const [hover, setHover] = React.useState<VenueRecord | null>(null);
  const venue = hover || selected || null;

  return (
    <article className={cn(articleStyle.article, s.container)} >
      <div className={articleStyle.left}>
        <figure>
          {venue && venue.media?.responsiveImage &&
            <Image data={venue.media.responsiveImage} fadeInDuration={0} />
          }
          {venue && venue.media?.video &&
            <VideoPlayer data={venue.media} className={s.video} />
          }
        </figure>
      </div>
      <div className={articleStyle.right}>
        <h1>Visit</h1>
        <ul className={s.venues}>
          {allVenues.map((venue, idx) =>
            <li
              key={idx}
              className={venue.id === selected?.id ? s.selected : undefined}
              onMouseEnter={() => setHover(venue as VenueRecord)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setSelected(selected?.id === venue.id ? null : venue as VenueRecord)}
            >
              <h3>Opening soon</h3>
              <div>{venue.city}</div>
              <div suppressHydrationWarning={true}>
                {format(new Date(venue.openingDate), 'MMMM dd, yyyy')}
              </div>
              <div className={s.info}>
                <Content content={venue.text} />
                {venue.openingDate && venue.closingDate &&
                  <div suppressHydrationWarning={true}>
                    {format(new Date(venue.openingDate), 'MMM dd, yyyy') + ' - ' + format(new Date(venue.closingDate), 'MMM dd, yyyy')}
                  </div>
                }
                {venue.address && <div>{venue.address}</div>}
                {venue.city && <div>{venue.city}</div>}
                {venue.openBetween && <div>{venue.openBetween}</div>}
              </div>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
};

