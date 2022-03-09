/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import GitHubButton from './GitHubButton'

import type { FunctionComponent } from 'react'

const Nav: FunctionComponent = () => {
  return (
    <nav className="flex justify-between p-6 px-4 container mx-auto">
      <div className="flex justify-between items-center w-full">
        <div>
          <Link href="/" passHref>
            <a className="max-w-max flex items-center space-x-2">
              <img
                className="h-12"
                src="/img/lapce.png"
                alt="Lapce Logo"
              />
              <p className="text-2xl text-coolGray-900">Lapce</p>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-12">
          <ul className="space-x-8 flex">
            <li>
              <a
                className="text-coolGray-800 hover:text-coolGray-500 font-medium"
                href="/docs"
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                className="text-coolGray-800 hover:text-coolGray-500 font-medium"
                href="/discord"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
          <div className="translate-y-1">
            <GitHubButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
