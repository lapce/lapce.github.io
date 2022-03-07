import { useState, useEffect } from 'react'

type OS = 'win' | 'mac' | 'linux'

export default function useOS() {
  const [os, setOS] = useState<OS>('win')

  useEffect(() => {
    const agent = (navigator?.userAgent ?? 'win').toLowerCase()
    switch (true) {
      case agent.includes('mac'):
        setOS('mac')
        break
      case agent.includes('linux'):
      case agent.includes('x11'):
        setOS('linux')
        break
      default:
        setOS('win')
    }
  }, [setOS])

  return os
}