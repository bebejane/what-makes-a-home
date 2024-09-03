'use client'

import s from './WhatMakesAHome.module.scss'
import { useStore } from '@lib/store';
import Link from 'next/link';
import { useEffect } from 'react';

export const interval = 700;

export default function WhatMakesAHome() {

  const [setInIntro] = useStore(state => [state.setInIntro]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInIntro(false);
    }, interval * 4);

    return () => clearTimeout(timeout);
  }, [setInIntro]);

  return (
    <div className={s.intro} style={{ "--interval": `${interval}ms` } as React.CSSProperties}>
      <h1><Link href="/">What</Link></h1>
      <h1><Link href="/">Makes</Link></h1>
      <h1><Link href="/">a Home</Link></h1>
    </div>
  )
}


