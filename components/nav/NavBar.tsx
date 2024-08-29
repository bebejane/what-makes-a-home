'use client'

import React from "react";
import Link from "next/link";
import cn from 'classnames'
import s from './NavBar.module.scss'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Menu } from "../../lib/menu";
import { useScrollInfo } from 'next-dato-utils/hooks'

export type Props = {
  menu: Menu
}

export default function NavBar({ menu, }: Props) {

  const pathname = usePathname()
  const { scrolledPosition } = useScrollInfo()
  const [open, setOpen] = useState(false)
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  return (
    <nav className={s.navbar}>
      <ul>
        {menu.map((item, i) => {
          const active = pathname === item.slug
          return (
            <li key={i} className={cn(active && s.active)}>
              <Link href={item.slug}>
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

