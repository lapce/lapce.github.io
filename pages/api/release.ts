import { Octokit } from '@octokit/rest'
import downloads from 'data/downloads'

import type { NextApiRequest, NextApiResponse } from 'next'

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
})

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { data: { tag_name, assets } } = await octokit.rest.repos.getLatestRelease({
    owner: 'lapce',
    repo: 'lapce',
  })

  if (process.env.NODE_ENV === 'production') res.setHeader('Cache-Control', `public,max-age=60,immutable`)

  const download_urls = downloads.map(({ files, ...download }) => ({
    ...download,
    files: files.map(({ search, ...file }) => ({
      href: assets.map(({ browser_download_url }) => browser_download_url).filter((x) => x.endsWith(search))[0] ?? '',
      ...file,
    })),
  }))

  return res.json({
    version: tag_name,
    downloads: download_urls,
    assets,
  })
}