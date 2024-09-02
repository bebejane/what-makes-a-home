'use client'

import s from './WhatMakesAHome.module.scss'
import { useStore } from '@lib/store';
import { useEffect } from 'react';

export const interval = 700;

export default function WhatMakesAHome() {

  const [inIntro, setInIntro] = useStore(state => [state.inIntro, state.setInIntro]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInIntro(false);
    }, interval * 4);

    return () => clearTimeout(timeout);
  }, [setInIntro]);

  return (
    <div className={s.intro} style={{ "--interval": `${interval}ms` } as React.CSSProperties}>
      <h1>What</h1>
      <h1>Makes</h1>
      <h1>a home</h1>
    </div>
  )
}


