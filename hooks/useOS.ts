import { useState, useEffect } from 'react'

export type OS = 'win' | 'mac' | 'linux'

export default function useOS() {
  const [os, setOS] = useState<OS>('mac')

  useEffect(() => {
    const agent = (navigator?.userAgent ?? 'mac').toLowerCase()
    switch (true) {
      case agent.includes('win'):
        setOS('win')
        break
      case agent.includes('linux'):
      case agent.includes('x11'):
        setOS('linux')
        break
      default:
        setOS('mac')
    }
  }, [setOS])

  return os
}
