'use client'

import s from './WhatMakesAHome.module.scss'

export const interval = 1000;

export default function WhatMakesAHome() {

  return (
    <div className={s.intro} style={{ "--interval": `${interval}ms` } as React.CSSProperties}>
      <h1>What</h1>
      <h1>Makes</h1>
      <h1>a home</h1>
    </div>
  )
}


