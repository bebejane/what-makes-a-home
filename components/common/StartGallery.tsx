'use client'
import "swiper/css";
import s from './StartGallery.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper'
import { VideoPlayer } from "next-dato-utils/components";
import SwiperCore from 'swiper'
import React, { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper'

SwiperCore.use([EffectFade, Autoplay]);

export type Props = {
  slides: StartQuery['start']['slideshow']
}

export default function StartGallery({ slides }: Props) {

  const swiperRef = useRef<SwiperType | undefined>()
  const [realIndex, setRealIndex] = useState(0)
  const [title, setTitle] = useState<string>()
  const [loaded, setLoaded] = useState<any>({})
  const [initLoaded, setInitLoaded] = useState(false)
  const [index, setIndex] = useState(0)


  return (
    <div className={s.gallery}>
      <Swiper
        id={`main-gallery`}
        className={s.swiper}
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        initialSlide={index}
        onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        {slides.map((slide, idx) =>
          <SwiperSlide key={idx} className={cn(s.slide)}>
            {slide.__typename === 'ImageBlockRecord' && <ImageSlide slide={slide as ImageBlockRecord} />}
            {slide.__typename === 'TextBlockRecord' && <TextSlide slide={slide as TextBlockRecord} />}
            {slide.__typename === 'VideoBlockRecord' && <VideoSlide slide={slide as VideoBlockRecord} />}
          </SwiperSlide>
        )}
      </Swiper>
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
      <h3>{slide.smallHeadline}</h3>
      <p>{slide.text}</p>
    </div>
  )
}

const VideoSlide = ({ slide }: { slide: VideoBlockRecord }) => {
  return (
    <div className={s.videoSlide}>
      <VideoPlayer data={slide} />
    </div>
  )
}