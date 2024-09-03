'use client'

import React from "react";
import s from './NavBar.module.scss'
import cn from 'classnames'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Menu } from "../../lib/menu";
import { Fade as Hamburger } from 'hamburger-react'
import { useStore } from "../../lib/store";

export type Props = {
  menu: Menu
}

export default function NavBar({ menu, }: Props) {

  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [inIntro] = useStore(state => [state.inIntro]);

  const handleClick = () => {
    setTimeout(() => setOpen(false), 300)
  }

  return (
    <>
      <nav className={cn(s.navbar, open && s.open, inIntro && s.intro)}>
        <ul>
          {menu.map((item, i) => {
            const active = pathname === item.slug
            return (
              <li key={i} className={cn(active && s.active)}>
                <Link href={item.slug} onClick={handleClick}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className={s.hamburger}>
        <Hamburger toggled={open} toggle={setOpen} size={28} />
      </nav>
    </>
  );
}

