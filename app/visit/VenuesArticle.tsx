'use client';

import React from 'react';
import s from './VenuesArticle.module.scss';
import articleStyle from '../../components/common/Article.module.scss';
import cn from 'classnames'
import Content from '../../components/content/Content';
import { Image } from 'react-datocms';
import { VideoPlayer } from 'next-dato-utils/components';

export type Props = {
  allVenues: AllVenuesQuery['allVenues']
}

export default function VenuesArticle({ allVenues }: Props) {

  const [selected, setSelected] = React.useState<VenueRecord | null>(allVenues?.[0] as VenueRecord ?? null);
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
        <h1>The Exhibitions</h1>
        <ul className={s.venues}>
          {allVenues.map((venue, idx) =>
            <li
              key={idx}
              className={venue.id === selected?.id ? s.selected : undefined}
              onMouseEnter={() => setHover(venue as VenueRecord)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setSelected(selected?.id === venue.id ? null : venue as VenueRecord)}
            >
              <h2>{venue.venueStatus}</h2>
              <h3>{venue.city}</h3>
              <h3>
                {venue.openingDates}
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
                <div className={s.support}>
                  <p className="very-small">With support from</p>
                  {venue.logo && <img className={s.logos} src={venue.logo.url} alt={venue.logo.alt} />}
                </div>

              </div>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
};

