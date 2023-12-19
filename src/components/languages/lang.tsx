"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ChangeLanguage() {
  const pathname = usePathname()
  console.log(pathname.split('/'));



  return (
    <Link href={`${pathname}/?lang=kh`} as="/kh">
      Khmer
    </Link>
  )

}