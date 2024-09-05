'use client'

import s from './StartGallery.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import { VideoPlayer } from "next-dato-utils/components";
import { sleep } from 'next-dato-utils/utils';
import React, { useState, useEffect } from 'react';
import { interval } from './WhatMakesAHome';
import { useStore } from '../../lib/store'

export type Props = {
  slides: (ImageBlockRecord | TextBlockRecord | VideoBlockRecord)[]
}

export default function StartGallery({ slides }: Props) {

  const [index, setIndex] = useState<number>(-1)
  const [inIntro] = useStore(state => [state.inIntro]);

  useEffect(() => {

    const update = async () => {
      if (inIntro)
        await sleep(interval * slides.length)

      for (let i = 0; i < slides.length; i++) {
        setIndex(i)
        await sleep(slides[i].duration * 1000)
      }
      update()
    }

    update()

  }, [inIntro, slides])

  return (
    <div className={cn(s.gallery, index === -1 && s.hide)}>
      <ul>
        {slides.map((slide, idx) =>
          <li key={idx} className={cn(s.slide, idx !== index && s.hide)}>
            {slide.__typename === 'ImageBlockRecord' && <ImageSlide slide={slide as ImageBlockRecord} />}
            {slide.__typename === 'TextBlockRecord' && <TextSlide slide={slide as TextBlockRecord} />}
            {slide.__typename === 'VideoBlockRecord' && <VideoSlide slide={slide as VideoBlockRecord} />}
          </li>
        )}
      </ul>
    </div>
  )
}

const ImageSlide = ({ slide }: { slide: ImageBlockRecord }) => {

  return (
    <div className={s.imageSlide}>
      <Image
        className={s.picture}
        data={slide.image.responsiveImage}
        onLoad={() => console.log('loaded')}
      />
    </div>
  )
}



const TextSlide = ({ slide }: { slide: TextBlockRecord }) => {
  return (
    <div className={s.textSlide}>
      <h2>{slide.smallHeadline}</h2>
      <h3>{slide.text}</h3>
    </div>
  )
}

const VideoSlide = ({ slide }: { slide: VideoBlockRecord }) => {

  return (
    <div className={s.videoSlide}>
      <VideoPlayer data={slide.video} />
    </div>
  )
}