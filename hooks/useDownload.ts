import { useState, useEffect } from 'react'
import useSWR from 'swr'

import useOS from './useOS'

const fetcher = (url: RequestInfo, args?: RequestInit) => fetch(url, args).then(res => res.json())

export default function useDownload() {
  const [url, setUrl] = useState('#')
  const [filename, setFilename] = useState(['macOS', ''])
  const os = useOS()
  const { data } = useSWR('/api/release', fetcher)

  useEffect(() => {
    switch (os) {
      case 'win':
        setFilename(['Windows', 'Lapce-windows.msi'])
        break
      case 'linux':
        setFilename(['Linux', 'Lapce-linux.tar.gz'])
        break
      default:
        setFilename(['macOS', 'Lapce-macos.dmg'])
    }
  }, [os])

  useEffect(() => {
    if (!data?.assets) return

    setUrl(data.assets.map(({ browser_download_url }) => browser_download_url).filter((x) => x.endsWith(filename[1]))[0])
  }, [filename, data])

  return [filename[0], url]
}
