import { useState, useEffect } from 'react'
import useSWR from 'swr'

import useOS, { OS } from './useOS'

const fetcher = (url: RequestInfo, args?: RequestInit) => fetch(url, args).then(res => res.json())

export default function useDownload(os: OS) {
  const [url, setUrl] = useState('#')
  const [filename, setFilename] = useState('')
  const { data } = useSWR('/api/release', fetcher)

  useEffect(() => {
    switch (os) {
      case 'win':
        setFilename('Lapce-windows.msi')
        break
      case 'linux':
        setFilename('Lapce-linux.tar.gz')
        break
      default:
        setFilename('Lapce-macos.dmg')
    }
  }, [os])

  useEffect(() => {
    if (!data?.assets) return

    setUrl(data.assets.map(({ browser_download_url }) => browser_download_url).filter((x) => x.endsWith(filename))[0])
  }, [filename, data])

  return url
}
