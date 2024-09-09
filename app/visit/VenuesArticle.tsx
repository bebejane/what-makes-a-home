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
      <div className={cn(articleStyle.left, s.left)}>
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
              <h2>{parseVenueStatus(venue as VenueRecord)}</h2>
              <h3>{venue.city}</h3>
              <h3 suppressHydrationWarning={true}>
                {format(new Date(venue.openingDate), 'MMM dd') + '–' + format(new Date(venue.closingDate), 'dd, yyyy')}
              </h3>
              {venue.media &&
                venue.media.responsiveImage ?
                <Image className={s.image} pictureClassName={s.picture} data={venue.media.responsiveImage} fadeInDuration={0} />
                :
                venue.media.video ?
                  <VideoPlayer className={s.video} data={venue.media} />
                  :
                  null
              }

              <div className={cn(s.info, "article")}>
                <Content content={venue.text} />
                {venue.address && <p className="small">Where: {venue.address}</p>}
                {venue.openBetween && <p className="small">When: {venue.openBetween}</p>}
              </div>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
};

const parseVenueStatus = (venue: VenueRecord): string => {

  const status = {
    'soon': 'Opening soon',
    'open': 'Open now',
    'past': 'Past Exhibitions',
  }

  const today = new Date();
  const opening = new Date(venue.openingDate);
  const closing = new Date(venue.closingDate);

  if (today < opening) {
    return status.soon;
  } else if (today >= opening && today <= closing) {
    return status.open;
  } else {
    return status.past;
  }
}