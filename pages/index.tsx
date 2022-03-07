import useSWR from 'swr'

import Hero from 'components/Hero'
import Features from 'components/Features'
import features from 'data/features'
import Downloads from 'components/Downloads'

import type { FunctionComponent } from 'react'

const fetcher = (url: RequestInfo, args?: RequestInit) => fetch(url, args).then(res => res.json())

const Home: FunctionComponent = () => {
  const { data } = useSWR('/api/release', fetcher)

  return (
    <>
      <Hero />
      <Features features={features} />
      <Downloads downloads={data?.downloads ?? []} latest={data?.version} />
    </>
  )
}

export default Home
