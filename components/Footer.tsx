/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import type { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <footer
      className="bg-coolGray-50 border-t border-coolGray-100"
      style={{ backgroundImage: "url('/img/pattern-light1.svg')", backgroundPosition: "center"}}
    >
      <div className="container mx-auto max-w-4xl flex flex-col py-16 space-y-8 justify-center items-center">
        <Link href="/" passHref>
          <a className="max-w-max flex items-center space-x-2">
            <Image height={48} width={48} src="/img/lapce.png" priority alt="Lapce Logo" />
            <p className="text-2xl text-coolGray-800">Lapce</p>
          </a>
        </Link>
        <a target="_blank" rel="noreferrer" href="https://discord.gg/n8tGJ6Rn6D">
          <img src="https://img.shields.io/discord/946858761413328946?logo=discord" alt="Discord Logo" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
