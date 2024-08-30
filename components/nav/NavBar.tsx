'use client'

import React from "react";
import Link from "next/link";
import cn from 'classnames'
import s from './NavBar.module.scss'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Menu } from "../../lib/menu";
import { useScrollInfo } from 'next-dato-utils/hooks'
import { Spin as Hamburger } from 'hamburger-react'

export type Props = {
  menu: Menu
}

export default function NavBar({ menu, }: Props) {

  const pathname = usePathname()
  const { scrolledPosition } = useScrollInfo()
  const [open, setOpen] = useState(false)
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <>
      <nav className={cn(s.navbar, open && s.open)}>
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

